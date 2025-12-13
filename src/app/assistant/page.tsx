"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  MessageCircle, 
  Send, 
  Bot, 
  User, 
  Sparkles,
  AlertTriangle,
  RefreshCw,
  Loader2
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Alert, AlertDescription } from "@/components/ui/alert"
import faqData from "../../../data/faq.json"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

const samplePrompts = faqData.aiPrompts

export default function AssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Namaste! I'm your guide to Mount Kailash. Ask me anything about the sacred mountain, pilgrimage routes, permits, gear, or spiritual significance. How can I help you today?"
    }
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isTyping])

  const handleSend = async () => {
    if (!input.trim() || isTyping) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim()
    }

    setMessages(prev => [...prev, userMessage])
    setInput("")
    setIsTyping(true)
    setError(null)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage]
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to get response")
      }

      const data = await response.json()
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.content
      }

      setMessages(prev => [...prev, assistantMessage])
    } catch (err: any) {
      console.error("Chat error:", err)
      setError(err.message || "Something went wrong. Please try again.")
      
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "I apologize, but I'm having trouble processing your question right now. Please try again or choose from the suggested prompts below."
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsTyping(false)
    }
  }

  const handleSamplePrompt = (prompt: string) => {
    setInput(prompt)
    inputRef.current?.focus()
  }

  const handleReset = () => {
    setMessages([{
      id: "welcome",
      role: "assistant",
      content: "Namaste! I'm your guide to Mount Kailash. Ask me anything about the sacred mountain, pilgrimage routes, permits, gear, or spiritual significance. How can I help you today?"
    }])
    setError(null)
  }

  return (
    <div className="min-h-screen">
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium">
              <MessageCircle className="w-4 h-4" />
              FAQ-Based Assistant
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold">
              Kailash Assistant
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Get instant answers about Mount Kailash, the Kora pilgrimage, travel requirements, and more.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Alert className="mb-6 border-amber-500/30 bg-amber-500/5">
            <AlertTriangle className="h-4 w-4 text-amber-500" />
            <AlertDescription className="text-sm text-amber-700 dark:text-amber-300">
              This assistant provides general educational information only. For travel planning, 
              always consult official sources and licensed tour operators.
            </AlertDescription>
          </Alert>

          {error && (
            <Alert className="mb-6 border-red-500/30 bg-red-500/5">
              <AlertTriangle className="h-4 w-4 text-red-500" />
              <AlertDescription className="text-sm text-red-700 dark:text-red-300">
                {error}
              </AlertDescription>
            </Alert>
          )}

          <Card className="border-2">
            <CardContent className="p-0">
              <ScrollArea className="h-[400px] sm:h-[500px] p-4" ref={scrollRef}>
                <div className="space-y-4">
                  <AnimatePresence>
                    {messages.map((message) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`}
                      >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          message.role === "assistant" 
                            ? "bg-gold/20 text-gold" 
                            : "bg-primary text-primary-foreground"
                        }`}>
                          {message.role === "assistant" ? (
                            <Bot className="w-4 h-4" />
                          ) : (
                            <User className="w-4 h-4" />
                          )}
                        </div>
                        <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                          message.role === "assistant"
                            ? "bg-muted"
                            : "bg-gold text-white"
                        }`}>
                          <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex gap-3"
                    >
                      <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                        <Bot className="w-4 h-4 text-gold" />
                      </div>
                      <div className="bg-muted rounded-2xl px-4 py-3">
                        <div className="flex gap-1">
                          <motion.span
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="w-2 h-2 rounded-full bg-gold"
                          />
                          <motion.span
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}
                            className="w-2 h-2 rounded-full bg-gold"
                          />
                          <motion.span
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }}
                            className="w-2 h-2 rounded-full bg-gold"
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </ScrollArea>

              <div className="border-t border-border p-4">
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    handleSend()
                  }}
                  className="flex gap-2"
                >
                  <Input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about Mount Kailash..."
                    className="flex-1"
                    disabled={isTyping}
                  />
                  <Button
                    type="submit"
                    disabled={!input.trim() || isTyping}
                    className="gradient-gold text-white border-0"
                  >
                    {isTyping ? (
                      <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleReset}
                    className="px-3"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6">
            <p className="text-sm text-muted-foreground mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold" />
              Try asking:
            </p>
            <div className="flex flex-wrap gap-2">
              {samplePrompts.map((prompt, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => handleSamplePrompt(prompt)}
                  className="text-xs h-auto py-2 px-3 whitespace-normal text-left"
                  disabled={isTyping}
                >
                  {prompt}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}