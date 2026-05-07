# Home Tuition Master Nepal - Full-Stack App

This project is a React (Vite) + Express + MongoDB full-stack application.

## Prerequisites

1. Install [Node.js](https://nodejs.org/).
2. Install [MongoDB](https://www.mongodb.com/) or get a MongoDB Atlas connection string.

## Running Locally

1. Clone or download this project.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables. Copy `.env.example` to `.env` and configure your `MONGO_URI` and `JWT_SECRET`:
   ```bash
   MONGO_URI="mongodb://localhost:27017/hometuitionnepal"
   JWT_SECRET="your_jwt_secret"
   ```
4. Run the development server (runs both API and frontend):
   ```bash
   npm run dev
   ```

The application runs on `http://localhost:3000`.

## API Routes Overview

* `GET /api/health` - Server health check
* `POST /api/auth/register` - User registration (Student/Tutor)
* `POST /api/auth/login` - User login
* `GET /api/jobs` - View available tuition jobs
* `POST /api/jobs` - Post a new tuition job
* `GET /api/tutors` - Fetch verified tutors
* `GET /api/tutors/:id` - Fetch single tutor by ID

## Deploying to Production (Render / Heroku)

To deploy to a service like Render:
1. Push your code to GitHub.
2. Create a new "Web Service" in Render and link your GitHub repository.
3. Node server build command: `npm run build`
4. Node server start command: `npm start`
5. Make sure to set your `MONGO_URI` and `JWT_SECRET` in the Render Environment Variables tab.
