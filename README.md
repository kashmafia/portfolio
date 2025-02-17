# Portfolio

This is a portfolio website built with React, Node.js, and integrated with LLM capabilities.

## To run the project

1. Clone the repository
2. Install dependencies
    a. `cd frontend`
    b. `npm install`
3. Start the frontend server
    a. `cd frontend`
    b. `npm start`


## Features

### Frontend
- React
- Tailwind CSS
- React Router
- React Hook Form
- React Icons
- React Scroll  

### Backend
- Node.js
- Express
- MongoDB
- JWT Authentication    

### LLM Integration
- OpenAI API
- LangChain
- React-PDF

#TO-DO
- Add a chatbot component
- Fix the backlight effect in Layout.jsx

## Project Structure

```
portfolio/
├── frontend/                  # Frontend React application
│   ├── public/               # Static files
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/           # Page components
│   │   ├── assets/          # Images, fonts, etc.
│   │   ├── styles/          # CSS/SCSS files
│   │   ├── utils/           # Helper functions
│   │   └── services/        # API calls and external services
│   ├── package.json
│   └── README.md
│
├── backend/                  # Backend Node.js/Express application
│   ├── src/
│   │   ├── controllers/     # Route controllers
│   │   ├── routes/          # API routes
│   │   ├── models/          # Data models
│   │   ├── services/        # Business logic
│   │   ├── utils/           # Helper functions
│   │   ├── config/          # Configuration files
│   │   └── middleware/      # Custom middleware
│   ├── package.json
│   └── README.md
│
├── .gitignore
├── README.md
└── docker-compose.yml       # If using Docker
```