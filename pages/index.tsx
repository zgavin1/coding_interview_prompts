
        
        import { useState, useEffect } from 'react'
        import { QuestionAnswer } from '../components/QuestionAnswer'
        import { getQuestions } from '../utils/api'
        import { Question, Answer } from '../types'

        export default function Home() {
          const [questions, setQuestions] = useState<Question[]>([])
          const [answers, setAnswers] = useState<string[]>([])
          const [feedback, setFeedback] = useState<string[]>([])
          const [loading, setLoading] = useState(false)

          const fetchNewQuestions = async () => {
            try {
              setLoading(true)
              const newQuestions = await getQuestions(3)
              setQuestions(newQuestions)
              setAnswers([])
              setFeedback([])
            } catch (error) {
              console.error('Error fetching questions:', error)
            } finally {
              setLoading(false)
            }
          }

          return (
            <div className="container mx-auto p-4">
              <h1 className="text-3xl font-bold mb-8">Coding Interview Questions</h1>
              <div className="space-y-4">
                {questions.map((question, index) => (
                  <QuestionAnswer
                    key={index}
                    question={question}
                    answer={answers[index] || ''}
                    feedback={feedback[index] || ''}
                    onAnswerChange={(answer) => {
                      const newAnswers = [...answers]
                      newAnswers[index] = answer
                      setAnswers(newAnswers)
                    }}
                    onSubmitAnswer={async () => {
                      try {
                        const response = await submitAnswer(answers[index], question.id)
                        setFeedback(prev => {
                          const newFeedback = [...prev]
                          newFeedback[index] = response
                          return newFeedback
                        })
                      } catch (error) {
                        console.error('Error submitting answer:', error)
                      }
                    }}
                  />
                ))}
              </div>
              <button
                onClick={fetchNewQuestions}
                disabled={loading}
                className="mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-500"
              >
                {loading ? 'Loading...' : 'New Questions'}
              </button>
            </div>
          )
        }
        
      