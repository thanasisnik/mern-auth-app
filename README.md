# mern-auth-app
A complete authentication system built with the MERN stack (MongoDB, Express.js, React.js, Node.js) featuring user registration, login, and JWT-based authentication.

## Features
- User Registration with password hashing
- Secure Login with JWT tokens
- MVC Architecture in backed
- CORS enabled for cross-origin requests
- Form Validation with Joi

## Tech Stack
### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- bcrypt 
- jsonwebtoken
- Joi
- CORS

### Frontend
- React.js
- Tailwind CSS
- React Router
- fetch

## Getting Started
### Prerequisites
- Node.js
- MongoDB
- Git

### Installation
1. Clone the repository
```
git clone https://github.com/thanasisnik/mern-auth-app.git
cd mern-auth-app
```
2. Backend Setup
```
cd backend
npm install
```
3. Frontend Setup
```
cd ../frontend
npm install
```

## Configuration
1. Create a .env file in the backend directory:
```
MONGODB_URI=your_mongo_uri
TOKEN_SECRET=your_jwt_secret_key
```

## Running the Application
1. Start the backend server
```
cd backend
npm start
```
2. Start the frontend development server
```
cd ../frontend
npm start
```
The application should now be running:
- Backend: http://localhost:3000
- Frontend: http://localhost:3001

## API Endpoints
1. User Register -> POST api/users/register
2. User Login -> POST /api/auth/login
 
