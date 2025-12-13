"use client"

import { motion } from "framer-motion"
import { 
  FileText, 
  AlertTriangle, 
  Plane, 
  Car, 
  Users,
  CreditCard,
  Clock,
  MapPin
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

const permits = [
  {
    name: "Chinese Visa",
    description: "Standard tourist visa for China. Must be obtained before travel from a Chinese embassy or consulate in your country.",
    timing: "Apply 1-3 months before departure",
    note: "Required for all foreign nationals"
  },
  {
    name: "Tibet Travel Permit (TTB)",
    description: "Official permit to enter the Tibet Autonomous Region. Cannot be obtained independently.",
    timing: "Arranged by tour operator, 2-3 weeks before",
    note: "Your tour operator handles this"
  },
  {
    name: "Alien Travel Permit",
    description: "Additional permit for travel to restricted areas including the Kailash region.",
    timing: "Obtained in Lhasa by your guide",
    note: "Processed upon arrival in Tibet"
  },
  {
    name: "Military Permit",
    description: "Required for border areas near India and Nepal where Mount Kailash is located.",
    timing: "Arranged alongside Alien Travel Permit",
    note: "Your tour operator handles this"
  }
]

const travelSteps = [
  {
    icon: Plane,
    title: "International Flight",
    description: "Fly to a major Chinese city (Beijing, Shanghai, Chengdu, or Kathmandu for overland entry)",
    duration: "Varies by origin"
  },
  {
    icon: Plane,
    title: "Flight to Lhasa",
    description: "Domestic flight to Lhasa Gonggar Airport. Acclimatize for 2-3 days.",
    duration: "2-3 hours + 2-3 days acclimatization"
  },
  {
    icon: Car,
    title: "Overland to Kailash",
    description: "4WD vehicle journey through Tibetan plateau via Shigatse and Saga.",
    duration: "3-4 days"
  },
  {
    icon: MapPin,
    title: "Arrive Darchen",
    description: "Base town for the Kailash Kora. Rest and prepare for the trek.",
    duration: "1 day acclimatization"
  }
]

export default function TravelPage() {
  return (
    <div className="min-h-screen">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-transparent" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-sm font-medium">
              <FileText className="w-4 h-4" />
              Planning Information
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold">
              Travel & Permits
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Essential information about permits, travel arrangements, and what to expect 
              when planning your pilgrimage.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Alert className="border-amber-500/50 bg-amber-500/10">
            <AlertTriangle className="h-4 w-4 text-amber-500" />
            <AlertTitle className="text-amber-700 dark:text-amber-300">Important Disclaimer</AlertTitle>
            <AlertDescription className="text-amber-700/80 dark:text-amber-300/80">
              This information is for general educational purposes only. Permit requirements 
              and travel regulations change frequently. Always verify current requirements 
              with official sources and work with a licensed Tibetan tour operator for 
              accurate, up-to-date information. This website does not provide legal or 
              travel advice.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-serif font-bold mb-2">Required Permits</h2>
            <p className="text-muted-foreground">
              Foreign visitors need multiple permits to visit Mount Kailash. Independent travel is not permitted.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {permits.map((permit, index) => (
              <motion.div
                key={permit.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-serif flex items-center gap-2">
                      <FileText className="w-5 h-5 text-gold" />
                      {permit.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{permit.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-muted-foreground" />
                        <span>{permit.timing}</span>
                      </div>
                      <div className="p-2 bg-muted/50 rounded-lg">
                        <p className="text-xs text-muted-foreground">{permit.note}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-serif font-bold mb-2">Typical Journey</h2>
            <p className="text-muted-foreground">
              The journey to Mount Kailash typically takes 15-20 days round trip from your home country.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
            
            <div className="space-y-6">
              {travelSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative md:pl-16"
                >
                  <div className="hidden md:flex absolute left-0 w-12 h-12 rounded-full bg-card border-2 border-gold items-center justify-center">
                    <step.icon className="w-5 h-5 text-gold" />
                  </div>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="md:hidden w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                          <step.icon className="w-5 h-5 text-gold" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{step.title}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{step.description}</p>
                          <p className="text-xs text-gold">{step.duration}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg font-serif flex items-center gap-2">
                    <Users className="w-5 h-5 text-gold" />
                    Tour Operators
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    You must book through a registered Tibetan tour operator. They will arrange 
                    all permits, transportation, accommodation, guides, and logistics. Choose 
                    operators with good reviews and experience with Kailash pilgrimages.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg font-serif flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-gold" />
                    Estimated Costs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    A typical 15-day pilgrimage costs approximately:
                  </p>
                  <ul className="space-y-1 text-sm">
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Tour package</span>
                      <span className="font-medium">$2,000 - $4,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">International flights</span>
                      <span className="font-medium">$500 - $1,500</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Visa fees</span>
                      <span className="font-medium">$100 - $200</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground">Personal gear</span>
                      <span className="font-medium">$300 - $1,000</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
