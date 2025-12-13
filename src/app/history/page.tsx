"use client"

import { motion } from "framer-motion"
import { History, Mountain, Ban, Quote, Globe } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import historyData from "../../../data/history.json"

export default function HistoryPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-500/5 to-transparent" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-400 text-sm font-medium">
              <History className="w-4 h-4" />
              Historical Record
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold">
              {historyData.overview.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {historyData.overview.description}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-gold/20 bg-gold/5">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center flex-shrink-0">
                    <Mountain className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-lg mb-2">Unclimbed Status</h3>
                    <p className="text-muted-foreground">{historyData.overview.unclimbedStatus}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-serif font-bold mb-2">Ancient History</h2>
            <p className="text-muted-foreground">
              The sacred significance of Mount Kailash spans millennia.
            </p>
          </motion.div>

          <div className="space-y-4">
            {historyData.ancientHistory.map((era, index) => (
              <motion.div
                key={era.era}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                      <h3 className="font-serif font-semibold">{era.era}</h3>
                      <Badge variant="outline">{era.period}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{era.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-serif font-bold mb-2">Modern History Timeline</h2>
            <p className="text-muted-foreground">
              Key events in the modern history of Mount Kailash exploration and protection.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-border to-border" />
            
            <div className="space-y-6">
              {historyData.modernHistory.map((event, index) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="relative pl-12"
                >
                  <div className="absolute left-0 w-8 h-8 rounded-full bg-card border-2 border-gold flex items-center justify-center">
                    <Globe className="w-4 h-4 text-gold" />
                  </div>
                  
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                        <Badge className="w-fit bg-gold/20 text-gold hover:bg-gold/30">{event.year}</Badge>
                        <h3 className="font-semibold">{event.event}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">{event.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-serif font-bold mb-2">{historyData.climbingAttempts.title}</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {historyData.climbingAttempts.reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Ban className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold mb-1">{reason.title}</h3>
                        <p className="text-sm text-muted-foreground">{reason.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-gold via-gold/50 to-transparent rounded-full" />
            <blockquote className="pl-8">
              <Quote className="w-8 h-8 text-gold/30 mb-2" />
              <p className="text-xl sm:text-2xl font-serif italic text-foreground/90 leading-relaxed mb-4">
                &ldquo;{historyData.climbingAttempts.quote.text}&rdquo;
              </p>
              <footer className="text-muted-foreground">
                <cite className="font-semibold not-italic">{historyData.climbingAttempts.quote.author}</cite>
                <p className="text-sm">{historyData.climbingAttempts.quote.context}</p>
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-serif">{historyData.geologicalHistory.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{historyData.geologicalHistory.description}</p>
                <div className="grid sm:grid-cols-2 gap-2">
                  {historyData.geologicalHistory.facts.map((fact, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                      {fact}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
