import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as LineStrategy } from 'passport-line';
import { User } from '../models/index.js';
import dotenv from 'dotenv';

dotenv.config();

// Serialize user to store in session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize user from session
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});

// Google OAuth Strategy
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK_URL,
  scope: ['profile', 'email']
}, async (accessToken, refreshToken, profile, done) => {
  try {
    const user = await User.findOrCreateFromOAuth(profile, 'google');
    
    // Update last login time
    if (user) {
      user.lastLogin = new Date();
      await user.save();
    }
    
    return done(null, user);
  } catch (error) {
    return done(error, null);
  }
}));

// LINE OAuth Strategy
passport.use(new LineStrategy({
  channelID: process.env.LINE_CLIENT_ID,
  channelSecret: process.env.LINE_CLIENT_SECRET,
  callbackURL: process.env.LINE_CALLBACK_URL,
  scope: ['profile', 'openid', 'email'],
  botPrompt: 'normal'
}, async (accessToken, refreshToken, profile, done) => {
  try {
    const user = await User.findOrCreateFromOAuth(profile, 'line');
    
    // Update last login time
    if (user) {
      user.lastLogin = new Date();
      await user.save();
    }
    
    return done(null, user);
  } catch (error) {
    return done(error, null);
  }
}));

export default passport;
