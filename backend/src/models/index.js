import { sequelize } from '../config/database.js';
import User from './User.js';

// Define model relationships here if needed
// For example:
// User.hasMany(Post);
// Post.belongsTo(User);

// Sync all models with the database
const syncModels = async (force = false) => {
  try {
    await sequelize.sync({ force });
    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Error synchronizing models:', error);
  }
};

export {
  User,
  syncModels,
};
