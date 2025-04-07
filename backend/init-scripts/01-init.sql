-- Create database if not exists
CREATE DATABASE IF NOT EXISTS belibe;

-- Use the database
USE belibe;

-- Create user table if not exists
CREATE TABLE IF NOT EXISTS `Users` (
  `id` VARCHAR(36) NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255),
  `googleId` VARCHAR(255),
  `lineId` VARCHAR(255),
  `profilePicture` VARCHAR(255),
  `role` ENUM('user', 'admin') DEFAULT 'user',
  `isActive` BOOLEAN DEFAULT TRUE,
  `lastLogin` DATETIME,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `googleId` (`googleId`),
  UNIQUE KEY `lineId` (`lineId`)
);

-- Create admin user if not exists
INSERT INTO `Users` (`id`, `name`, `email`, `password`, `role`, `isActive`, `createdAt`, `updatedAt`)
SELECT UUID(), 'Admin User', 'admin@belibe.com', '$2a$10$JqZvX9JEpZjzlWEHxBPQkuCa.YVEJZZQt4qQJsUOYRGTzh5wN8kAi', 'admin', TRUE, NOW(), NOW()
WHERE NOT EXISTS (SELECT * FROM `Users` WHERE `email` = 'admin@belibe.com');

-- Note: The password for admin@belibe.com is 'admin123'
-- This is just for development purposes and should be changed in production
