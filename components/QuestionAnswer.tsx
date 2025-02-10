
        
        import { useState } from 'react'
        import { Textarea, Button, Box } from '@chakra-ui/react'

        interface QuestionAnswerProps {
          question: {
            id: string
            text: string
          }
          answer: string
          feedback: string
          onAnswerChange: (answer: string) => void
          onSubmitAnswer: () => void
        }

        export const QuestionAnswer = ({
          question,
          answer,
          feedback,
          onAnswerChange,
          onSubmitAnswer
        }: QuestionAnswerProps) => {
          const [isSubmitting, setIsSubmitting] = useState(false)

          const handleSubmit = async () => {
            setIsSubmitting(true)
            await onSubmitAnswer()
            setIsSubmitting(false)
          }

          return (
            <Box border="1px" borderRadius="4px" p={4} mb={4}>
              <h2 className="text-xl font-semibold mb-2">{question.text}</h2>
              <Textarea
                value={answer}
                onChange={(e) => onAnswerChange(e.target.value)}
                placeholder="Write your answer here..."
                mb={2}
              />
              {feedback && (
                <div className="mt-2 p-2 bg-gray-100 rounded">
                  <h3 className="font-medium mb-1">Feedback:</h3>
                  <p>{feedback}</p>
                </div>
              )}
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="mt-2"
                isLoading={isSubmitting}
                colorScheme="green"
              >
                Submit Answer
              </Button>
            </Box>
          )
        }
        
      