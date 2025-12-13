"use client"

import { motion } from "framer-motion"
import { Sparkles, BookOpen, CircleDot, HandHeart, Flame } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import sacredData from "../../../data/sacred.json"

const religionIcons: Record<string, React.ElementType> = {
  "Hinduism": Flame,
  "Tibetan Buddhism": CircleDot,
  "Jainism": HandHeart,
  "Bon": Sparkles,
}

const religionColors: Record<string, string> = {
  "Hinduism": "bg-amber-500/10 border-amber-500/20 text-amber-600 dark:text-amber-400",
  "Tibetan Buddhism": "bg-red-500/10 border-red-500/20 text-red-600 dark:text-red-400",
  "Jainism": "bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400",
  "Bon": "bg-purple-500/10 border-purple-500/20 text-purple-600 dark:text-purple-400",
}

export default function SacredPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium">
              <BookOpen className="w-4 h-4" />
              Spiritual Significance
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold">
              {sacredData.overview.title}
            </h1>
            <p className="text-xl text-muted-foreground">
              {sacredData.overview.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed text-center"
          >
            {sacredData.overview.description}
          </motion.p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          {sacredData.religions.map((religion, index) => {
            const Icon = religionIcons[religion.name] || Sparkles
            const colorClass = religionColors[religion.name] || "bg-muted"
            
            return (
              <motion.div
                key={religion.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`overflow-hidden border-2 ${colorClass.split(' ')[1]}`}>
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-3 gap-0">
                      <div className={`p-8 ${colorClass.split(' ')[0]}`}>
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 bg-background/50 ${colorClass.split(' ')[2]} ${colorClass.split(' ')[3]}`}>
                          <Icon className="w-8 h-8" />
                        </div>
                        <h2 className="text-2xl font-serif font-bold mb-2">{religion.name}</h2>
                        <p className="text-lg font-medium text-foreground/80">{religion.title}</p>
                      </div>
                      
                      <div className="md:col-span-2 p-8 space-y-6">
                        <div>
                          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Beliefs</h3>
                          <ul className="space-y-2">
                            {religion.beliefs.map((belief, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                                {belief}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Practices</h3>
                          <ul className="space-y-2">
                            {religion.practices.map((practice, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 flex-shrink-0" />
                                {practice}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Scriptures</h3>
                          <div className="flex flex-wrap gap-2">
                            {religion.scriptures.map((scripture, i) => (
                              <span key={i} className="px-3 py-1 bg-muted rounded-full text-xs">
                                {scripture}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-serif font-bold mb-4">
              {sacredData.sharedBeliefs.title}
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {sacredData.sharedBeliefs.points.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-serif font-semibold mb-2">{point.title}</h3>
                    <p className="text-sm text-muted-foreground">{point.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-gold via-gold/50 to-transparent rounded-full" />
            <blockquote className="pl-8">
              <p className="text-xl sm:text-2xl font-serif italic text-foreground/90 leading-relaxed mb-4">
                &ldquo;{sacredData.quote.text}&rdquo;
              </p>
              <footer className="text-muted-foreground">
                <cite className="not-italic">— {sacredData.quote.author}</cite>
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
