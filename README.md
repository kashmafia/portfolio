# Portfolio

This is a portfolio website built with React and integrated with LLM capabilities.

## To run the project

1. Clone the repository
2. Install dependencies
    a. `cd frontend`
    b. `npm install`
3. Start the frontend server
    a. `cd frontend`
    b. `npm start`

## To connect to the EC2 instance for development

1. `ssh -i "kash.pem" ubuntu@ec2-13-53-190-10.eu-north-1.compute.amazonaws.com`

### To send a request to the LLM API on the EC2 instance

1. `curl -X POST http://ec2-18-222-214-150.us-east-2.compute.amazonaws.com:8000/chat     -H "Content-Type: application/json"     -d '{"query": "Is kaushik able to solve complex problems?"}'`

### To run the project on the EC2 instance

1. `uvicorn kash-portfolio:app --host 0.0.0.0 --port 8000`

## Features

### Frontend
- React
- Tailwind CSS
- React Router
- React Hook Form
- React Icons
- React Scroll  

### Backend 

### LLM Integration
- gemma:2b-instruct-q4_K_M (quantized model)

#TO-DO
- Add a chatbot component

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
│   ├── package.json
│   └── README.md
│
├── .gitignore
├── README.md
└── docker-compose.yml       # If using Docker
```