
        
        export interface Question {
          id: string
          text: string
        }

        export interface Answer {
          id: string
          feedback: string
        }

        export interface ChatCompletionRequest {
          model: string
          messages: Array<{
            role: 'user' | 'assistant'
            content: string
          }>
          temperature?: number
        }

        export interface ChatCompletionResponse {
          choices: Array<{
            message: {
              content: string
            }
          }>
        }
        
      