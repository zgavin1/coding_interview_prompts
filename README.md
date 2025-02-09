# Interview Questions App

A Next.js application that generates and displays coding interview questions using the GroqAI API.

## Getting Started

1. Install dependencies:
 ```bash
 npm install
 ```

2. Create a `.env.local` file in the root directory and add your GroqAI API key:
 ```
 GROQ_API_KEY=your_api_key_here
 ```

3. Run the development server:
 ```bash
 npm run dev
 ```

4. Open http://localhost:3000 in your browser

## Features

- Generates 3 coding interview questions per request
- Displays questions with proper formatting
- Allows users to input answers
- Provides feedback through the GroqAI API
- Includes loading states and error handling
- Uses TypeScript for type safety
- Follows Next.js best practices

## Configuration

The application uses the following environment variables:

- `GROQ_API_KEY`: Your GroqAI API key
- `GROQ_API_URL`: (Optional) Custom endpoint URL