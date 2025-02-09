
        
        import { NextApiRequest, NextApiResponse } from 'next'
        import axios from 'axios'

        const groqClient = axios.create({
          baseURL: process.env.GROQ_API_URL,
          headers: {
            'Authorization': `Bearer ${process.env.GROQ_API_KEY}`,
            'Content-Type': 'application/json'
          }
        })

        export const getQuestions = async (count: number) => {
          try {
            const response = await groqClient.post('/chat/completions', {
              model: 'mixtral-8x7b-32768',
              messages: [{
                role: 'user',
                content: `Generate ${count} coding interview questions with moderate difficulty. Return only the questions, each as a separate message with their IDs.`
              }],
              temperature: 0.7
            })

            const questions = response.data.choices[0].message.content
              .split('\n')
              .map((q) => ({ id: Date.now() + Math.random(), text: q.trim() }))

            return questions
          } catch (error) {
            console.error('Error fetching questions:', error)
            throw error
          }
        }

        export const submitAnswer = async (answer: string, questionId: string) => {
          try {
            const response = await groqClient.post('/chat/completions', {
              model: 'mixtral-8x7b-32768',
              messages: [
                {
                  role: 'user',
                  content: `Provide detailed feedback on this answer to the coding question: ${answer}`
                }
              ],
              temperature: 0.7
            })

            return response.data.choices[0].message.content
          } catch (error) {
            console.error('Error submitting answer:', error)
            throw error
          }
        }
        
      