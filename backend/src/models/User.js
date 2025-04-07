import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';
import bcrypt from 'bcryptjs';

const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true, // Null for OAuth users
  },
  googleId: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
  },
  lineId: {
    type: DataTypes.STRING,
    allowNull: true,
    unique: true,
  },
  profilePicture: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  role: {
    type: DataTypes.ENUM('user', 'admin'),
    defaultValue: 'user',
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  lastLogin: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  timestamps: true,
  hooks: {
    beforeCreate: async (user) => {
      // Only hash password if it exists (for non-OAuth users)
      if (user.password) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
      }
    },
    beforeUpdate: async (user) => {
      // Only hash password if it's changed
      if (user.changed('password') && user.password) {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
      }
    },
  },
});

// Instance method to check password
User.prototype.comparePassword = async function(candidatePassword) {
  if (!this.password) return false;
  return await bcrypt.compare(candidatePassword, this.password);
};

// Method to find or create a user from OAuth profile
User.findOrCreateFromOAuth = async function(profile, provider) {
  const providerField = provider === 'google' ? 'googleId' : 'lineId';
  const providerValue = profile.id;
  
  // Try to find user by provider ID
  let user = await User.findOne({ where: { [providerField]: providerValue } });
  
  // If user doesn't exist, try to find by email or create new user
  if (!user && profile.emails && profile.emails.length > 0) {
    const email = profile.emails[0].value;
    
    // Try to find user by email
    user = await User.findOne({ where: { email } });
    
    // If user exists, update provider ID
    if (user) {
      user[providerField] = providerValue;
      await user.save();
    } else {
      // Create new user
      user = await User.create({
        name: profile.displayName || profile.username || email.split('@')[0],
        email,
        [providerField]: providerValue,
        profilePicture: profile.photos && profile.photos.length > 0 ? profile.photos[0].value : null,
      });
    }
  }
  
  return user;
};

export default User;
