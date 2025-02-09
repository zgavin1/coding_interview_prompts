
        # NextJS Interview Questions App

        A Next.js application that generates and displays coding interview questions with answers and feedback.

        ## Getting Started

        1. Clone the repository
        2. Install dependencies:
           ```bash
           npm install
           ```
        3. Create a `.env.local` file using the template below
        4. Start development server:
           ```bash
           npm run dev
           ```

        ## Environment Variables

        Create a `.env.local` file with these variables:
        ```env
        GROQ_API_KEY=your_groq_api_key
        GROQ_API_URL=https://api.groq.com/openai/v1
        ```

        ## Features

        - Generates 3 coding interview questions per request
        - Provides detailed answers and explanations
        - Allows user to input answers and get feedback
        - Responsive UI with loading states and error handling
      