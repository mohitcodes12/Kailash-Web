"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { 
  MapPin, 
  Mountain, 
  Sparkles, 
  ArrowRight, 
  Compass, 
  MessageCircle,
  BookOpen,
  Footprints,
  Backpack,
  FileText,
  History
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const quickFacts = [
  {
    icon: MapPin,
    label: "Location",
    value: "Tibet, China",
    detail: "Near India & Nepal borders"
  },
  {
    icon: Mountain,
    label: "Elevation",
    value: "6,638 m",
    detail: "21,778 feet above sea level"
  },
  {
    icon: Sparkles,
    label: "Sacred Status",
    value: "4 Religions",
    detail: "Hinduism, Buddhism, Jainism, Bon"
  }
]

const featuredSections = [
  {
    icon: BookOpen,
    title: "Sacred Significance",
    description: "Discover why billions consider Kailash the spiritual center of the universe.",
    href: "/sacred",
    color: "text-amber-600 dark:text-amber-400"
  },
  {
    icon: Footprints,
    title: "Routes & Kora",
    description: "Explore the sacred circumambulation path and day-by-day journey details.",
    href: "/routes",
    color: "text-emerald-600 dark:text-emerald-400"
  },
  {
    icon: Backpack,
    title: "Gear Checklist",
    description: "Essential equipment and packing lists organized by season.",
    href: "/gear",
    color: "text-blue-600 dark:text-blue-400"
  },
  {
    icon: FileText,
    title: "Travel & Permits",
    description: "Understand the permit requirements and travel arrangements.",
    href: "/travel",
    color: "text-purple-600 dark:text-purple-400"
  },
  {
    icon: History,
    title: "History & Attempts",
    description: "Learn why Kailash remains the world's most prominent unclimbed peak.",
    href: "/history",
    color: "text-rose-600 dark:text-rose-400"
  },
  {
    icon: MessageCircle,
    title: "AI Assistant",
    description: "Ask questions and get instant answers about Mount Kailash.",
    href: "/assistant",
    color: "text-gold"
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?q=80&w=2787&auto=format&fit=crop')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-sm font-medium"
            >
              <Sparkles className="w-4 h-4" />
              Sacred to Four World Religions
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold tracking-tight">
              <span className="block">Mount</span>
              <span className="block text-gradient-gold">Kailash</span>
            </h1>

            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Journey into the heart of the world&apos;s most sacred mountain. 
              Discover ancient wisdom, pilgrimage routes, and spiritual significance 
              of the peak that has inspired billions for millennia.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <Button asChild size="lg" className="gradient-gold text-white border-0 px-8 rounded-full">
                <Link href="/routes">
                  <Compass className="w-5 h-5 mr-2" />
                  Explore Routes
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <Link href="/assistant">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Ask AI
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
          >
            {quickFacts.map((fact, index) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-4 text-center"
              >
                <fact.icon className="w-6 h-6 mx-auto mb-2 text-gold" />
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{fact.label}</p>
                <p className="text-xl font-serif font-semibold">{fact.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{fact.detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-gold" />
          </motion.div>
        </motion.div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
              Discover Kailash
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about the sacred mountain, from spiritual significance 
              to practical pilgrimage information.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {featuredSections.map((section, index) => (
              <motion.div
                key={section.title}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <Link href={section.href}>
                  <Card className="h-full bg-card hover:bg-card/80 transition-all duration-300 border-border hover:border-gold/30 hover:shadow-lg group cursor-pointer">
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${section.color}`}>
                        <section.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-serif font-semibold mb-2 group-hover:text-gold transition-colors">
                        {section.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {section.description}
                      </p>
                      <div className="flex items-center text-sm font-medium text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn more <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-gold via-gold/50 to-transparent rounded-full" />
            <blockquote className="pl-8">
              <p className="text-2xl sm:text-3xl font-serif italic text-foreground/90 leading-relaxed mb-6">
                &ldquo;If we conquer this mountain, then we conquer something in people&apos;s souls. 
                I would suggest that they go and climb something a little harder. 
                Kailash is not so high and not so hard.&rdquo;
              </p>
              <footer className="text-muted-foreground">
                <cite className="font-semibold not-italic">Reinhold Messner</cite>
                <p className="text-sm">When asked why he refused permission to climb Kailash in 1981</p>
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a] rounded-3xl mx-4 sm:mx-6 lg:mx-8 mb-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 text-amber-400 text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                AI-Powered Assistant
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
                Have Questions About Kailash?
              </h2>
              
              <p className="text-gray-400 text-lg">
                Our AI assistant can answer your questions about the sacred mountain, 
                pilgrimage routes, gear requirements, and more.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {['"How many days is the Kora?"', '"What should I pack?"', '"Why is it sacred?"'].map((question) => (
                  <span 
                    key={question}
                    className="px-4 py-2 rounded-full border border-gray-700 text-gray-300 text-sm hover:border-gray-500 transition-colors cursor-default"
                  >
                    {question}
                  </span>
                ))}
              </div>
              
              <Button asChild size="lg" className="bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 border-0 rounded-full px-6 mt-2">
                <Link href="/assistant">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Start Asking
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="hidden lg:block"
            >
              <div className="bg-[#252525] rounded-2xl p-5 border border-gray-800 max-w-sm ml-auto">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Kailash AI</p>
                    <p className="text-xs text-gray-500">Always here to help</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-[#333] rounded-xl rounded-tr-sm px-4 py-3 ml-auto max-w-[85%]">
                    <p className="text-sm text-gray-200">What&apos;s the best time to visit?</p>
                  </div>
                  <div className="bg-gradient-to-r from-amber-600/80 to-amber-700/80 rounded-xl rounded-tl-sm px-4 py-3 max-w-[85%]">
                    <p className="text-sm text-white">The best time is May-October, with September offering the clearest skies...</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}