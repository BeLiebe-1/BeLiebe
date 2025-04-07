import express from 'express';
import passport from 'passport';
import * as authController from '../controllers/authController.js';
import { authenticate } from '../middlewares/auth.js';

const router = express.Router();

// Local authentication routes
router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/profile', authenticate, authController.getProfile);
router.post('/logout', authController.logout);

// Google OAuth routes
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get(
  '/google/callback',
  passport.authenticate('google', { 
    failureRedirect: '/login',
    session: true
  }),
  authController.oauthSuccess
);

// LINE OAuth routes
router.get('/line', passport.authenticate('line'));
router.get(
  '/line/callback',
  passport.authenticate('line', { 
    failureRedirect: '/login',
    session: true
  }),
  authController.oauthSuccess
);

export default router;
