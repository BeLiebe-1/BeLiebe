# Belibe

Express application with MariaDB, Sequelize, and OAuth authentication using Google and LINE.

## Features

- Express.js backend with Bun runtime
- MariaDB database with Sequelize ORM
- Authentication with JWT
- OAuth integration with Google and LINE
- Dockerized application with docker-compose
- User management system

## Prerequisites

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Bun](https://bun.sh/) (for local development)

## Getting Started

### Environment Variables

Copy the `.env.example` file to `.env` and update the values:

```bash
cp .env.example .env
```

Update the following variables in the `.env` file:

- `JWT_SECRET`: Secret key for JWT token generation
- `GOOGLE_CLIENT_ID`: Google OAuth client ID
- `GOOGLE_CLIENT_SECRET`: Google OAuth client secret
- `LINE_CLIENT_ID`: LINE OAuth client ID
- `LINE_CLIENT_SECRET`: LINE OAuth client secret
- `SESSION_SECRET`: Secret key for session management

### Running with Docker Compose

Build and start the containers:

```bash
docker-compose up -d
```

This will start the Express application and MariaDB database.

### Local Development

Install dependencies:

```bash
bun install
```

Start the development server:

```bash
bun dev
```

## API Endpoints

### Authentication

- `POST /api/auth/register`: Register a new user
- `POST /api/auth/login`: Login with email and password
- `GET /api/auth/profile`: Get user profile (requires authentication)
- `POST /api/auth/logout`: Logout user

### OAuth

- `GET /api/auth/google`: Initiate Google OAuth flow
- `GET /api/auth/google/callback`: Google OAuth callback
- `GET /api/auth/line`: Initiate LINE OAuth flow
- `GET /api/auth/line/callback`: LINE OAuth callback

## Project Structure

```
.
├── Dockerfile              # Docker configuration for the application
├── docker-compose.yml      # Docker Compose configuration
├── init-scripts/           # Database initialization scripts
├── package.json            # Project dependencies and scripts
├── src/
│   ├── config/             # Configuration files
│   ├── controllers/        # Request handlers
│   ├── middlewares/        # Express middlewares
│   ├── models/             # Sequelize models
│   ├── routes/             # API routes
│   ├── services/           # Business logic
│   ├── utils/              # Utility functions
│   └── index.js            # Application entry point
```

## OAuth Configuration

### Google OAuth

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project
3. Navigate to "APIs & Services" > "Credentials"
4. Create an OAuth 2.0 Client ID
5. Add authorized redirect URIs (e.g., `http://localhost:5000/api/auth/google/callback`)
6. Copy the Client ID and Client Secret to your `.env` file

### LINE OAuth

1. Go to the [LINE Developers Console](https://developers.line.biz/console/)
2. Create a new provider and channel
3. Configure the channel for LINE Login
4. Add a callback URL (e.g., `http://localhost:5000/api/auth/line/callback`)
5. Copy the Channel ID and Channel Secret to your `.env` file

## License

This project is licensed under the MIT License.
