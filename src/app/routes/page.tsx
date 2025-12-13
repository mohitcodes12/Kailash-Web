"use client"

import { motion } from "framer-motion"
import { 
  Footprints, 
  MapPin, 
  Clock, 
  TrendingUp, 
  Mountain,
  Waves,
  ChevronRight
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import routesData from "../../../data/routes.json"

export default function RoutesPage() {
  const { outerKora, innerKora, lakeManasarovar } = routesData

  return (
    <div className="min-h-screen">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm font-medium">
              <Footprints className="w-4 h-4" />
              Pilgrimage Routes
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold">
              Routes & Kora
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The sacred circumambulation around Mount Kailash, one of the most spiritually 
              significant pilgrimages in the world.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border-2 border-gold/20 bg-gradient-to-br from-gold/5 to-transparent">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                    <Footprints className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-serif">{outerKora.title}</CardTitle>
                    <p className="text-muted-foreground text-sm">{outerKora.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="text-center p-4 bg-muted/50 rounded-xl">
                    <MapPin className="w-5 h-5 mx-auto mb-2 text-gold" />
                    <p className="text-xs text-muted-foreground">Distance</p>
                    <p className="font-semibold">{outerKora.distance}</p>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-xl">
                    <Clock className="w-5 h-5 mx-auto mb-2 text-gold" />
                    <p className="text-xs text-muted-foreground">Duration</p>
                    <p className="font-semibold">{outerKora.duration}</p>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-xl">
                    <TrendingUp className="w-5 h-5 mx-auto mb-2 text-gold" />
                    <p className="text-xs text-muted-foreground">Highest Point</p>
                    <p className="font-semibold text-sm">{outerKora.elevation.highest.split(' - ')[0]}</p>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-xl">
                    <Mountain className="w-5 h-5 mx-auto mb-2 text-gold" />
                    <p className="text-xs text-muted-foreground">Difficulty</p>
                    <p className="font-semibold">{outerKora.difficulty}</p>
                  </div>
                </div>

                <h3 className="text-xl font-serif font-semibold mb-6">Day-by-Day Journey</h3>
                
                <div className="relative">
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-gold/50 to-gold/20" />
                  
                  <div className="space-y-8">
                    {outerKora.days.map((day, index) => (
                      <motion.div
                        key={day.day}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative pl-12"
                      >
                        <div className="absolute left-0 w-8 h-8 rounded-full bg-gold text-white flex items-center justify-center text-sm font-bold">
                          {day.day}
                        </div>
                        
                        <Card>
                          <CardContent className="p-6">
                            <div className="flex flex-wrap items-center gap-2 mb-3">
                              <h4 className="text-lg font-serif font-semibold">{day.title}</h4>
                              <Badge variant="secondary">{day.distance}</Badge>
                              <Badge variant="outline">{day.duration}</Badge>
                            </div>
                            
                            <p className="text-sm text-muted-foreground mb-4">{day.description}</p>
                            
                            <div className="flex flex-wrap gap-2">
                              {day.highlights.map((highlight, i) => (
                                <span key={i} className="inline-flex items-center text-xs px-2 py-1 bg-gold/10 text-gold rounded-full">
                                  <ChevronRight className="w-3 h-3 mr-1" />
                                  {highlight}
                                </span>
                              ))}
                            </div>
                            
                            <div className="mt-4 pt-4 border-t border-border">
                              <p className="text-xs text-muted-foreground">
                                <span className="font-medium">Elevation:</span> {day.elevation}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center">
                      <Mountain className="w-5 h-5 text-purple-500" />
                    </div>
                    <CardTitle className="text-xl font-serif">{innerKora.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{innerKora.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-muted-foreground">Distance</p>
                      <p className="font-semibold">{innerKora.distance}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Duration</p>
                      <p className="font-semibold">{innerKora.duration}</p>
                    </div>
                  </div>
                  <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg">
                    <p className="text-xs text-amber-700 dark:text-amber-300">{innerKora.note}</p>
                  </div>
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
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center">
                      <Waves className="w-5 h-5 text-blue-500" />
                    </div>
                    <CardTitle className="text-xl font-serif">{lakeManasarovar.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{lakeManasarovar.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-muted-foreground">Distance</p>
                      <p className="font-semibold">{lakeManasarovar.distance}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Duration</p>
                      <p className="font-semibold">{lakeManasarovar.duration}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {lakeManasarovar.highlights.map((highlight, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
