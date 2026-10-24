# CozyAI - Your Cozy Study Hub

## Overview
CozyAI is a web application designed to help university students study in a comfortable, stress-free environment. It features custom Pomodoro timers with ambient sounds, an AI note generator, an AI tutor chat with PDF text extraction, and an interactive exam simulator.

## Setup and Run
This is a static frontend with a serverless backend function.
- Frontend: HTML/CSS/JS (runs in any modern browser).
- Backend: Vercel serverless function (Node.js).
- Local testing requires Ollama running `gemma4:e2b`.

## Technology Stack
- HTML5, CSS3, Vanilla JavaScript (Frontend)
- Node.js (Serverless Backend)
- Vercel (Hosting)
- PDF.js (PDF parsing)
- OpenRouter API (Cloud AI inference)

## Templates and Starter Kits Used
None. Built from scratch during the hackathon.

## Models and AI
### Open-weight models in the product
- Model: **Google Gemma 3 (2B parameter version)** (`google/gemma-3n-e2b-it:free`)
- Where it runs: Through **OpenRouter** (hosted inference provider) for the live deployment, and locally via **Ollama** (`gemma4:e2b`) for offline testing.
- What it does: It is the core engine. It reads the student's context/PDF text and generates flashcards, quizzes, chat responses, and interactive 5-question practice exams.

### Proprietary models in the product
- None.

### AI coding assistants used
- AI coding assistant (DeepSeek) was used to help structure the HTML/CSS layout and write the initial boilerplate for the fetch requests. The logic, UI design, themes, and prompt engineering were written and heavily modified by the participant.

## License
MIT License