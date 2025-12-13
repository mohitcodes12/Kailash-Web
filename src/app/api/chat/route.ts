import { NextRequest, NextResponse } from "next/server"
import faqData from "../../../../data/faq.json"

interface Message {
  role: "user" | "assistant"
  content: string
}

function findBestMatch(question: string): string {
  const normalizedQuestion = question.toLowerCase().trim()
  
  let bestMatch: { answer: string; score: number } | null = null
  
  for (const category of faqData.categories) {
    for (const faq of category.questions) {
      const normalizedFaq = faq.question.toLowerCase()
      const normalizedAnswer = faq.answer.toLowerCase()
      
      let score = 0
      
      if (normalizedFaq.includes(normalizedQuestion) || normalizedQuestion.includes(normalizedFaq)) {
        score += 100
      }
      
      const questionWords = normalizedQuestion.split(/\s+/).filter(w => w.length > 3)
      const faqWords = normalizedFaq.split(/\s+/)
      
      for (const word of questionWords) {
        if (faqWords.some(fw => fw.includes(word) || word.includes(fw))) {
          score += 10
        }
        if (normalizedAnswer.includes(word)) {
          score += 5
        }
      }
      
      if (score > 0 && (!bestMatch || score > bestMatch.score)) {
        bestMatch = { answer: faq.answer, score }
      }
    }
  }
  
  if (bestMatch && bestMatch.score >= 15) {
    return bestMatch.answer
  }
  
  return "I apologize, but I don't have specific information about that in my knowledge base. However, I can help you with questions about:\n\n• Mount Kailash's location, height, and sacred significance\n• The Kailash Kora pilgrimage (duration, difficulty, routes)\n• Preparation requirements (gear, fitness, altitude acclimatization)\n• Permits and travel logistics\n• Climbing restrictions and access\n• Spiritual significance across religions\n\nPlease try rephrasing your question or choose from the suggested prompts below!"
}

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json()
    
    const userMessages = messages.filter((m: Message) => m.role === "user")
    const lastMessage = userMessages[userMessages.length - 1]?.content || ""
    
    const response = findBestMatch(lastMessage)
    
    return NextResponse.json({ content: response })
  } catch (error: any) {
    console.error("Chat error:", error)
    return NextResponse.json(
      { error: error.message || "Failed to generate response" },
      { status: 500 }
    )
  }
}
