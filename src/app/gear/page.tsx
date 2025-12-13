"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Backpack, 
  Shirt, 
  Footprints, 
  Tent, 
  Mountain,
  HeartPulse,
  FileText,
  Sparkles,
  Check,
  Sun,
  Cloud,
  Leaf,
  Snowflake
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import gearData from "../../../data/gear.json"

const categoryIcons: Record<string, React.ElementType> = {
  "Clothing": Shirt,
  "Footwear": Footprints,
  "Backpack & Bags": Backpack,
  "Sleeping": Tent,
  "Trekking Equipment": Mountain,
  "Health & Safety": HeartPulse,
  "Documents & Essentials": FileText,
  "Optional Extras": Sparkles,
}

const seasonIcons: Record<string, React.ElementType> = {
  spring: Sun,
  summer: Cloud,
  autumn: Leaf,
  winter: Snowflake,
}

export default function GearPage() {
  const [selectedSeason, setSelectedSeason] = useState("spring")

  return (
    <div className="min-h-screen">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium">
              <Backpack className="w-4 h-4" />
              Essential Equipment
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold">
              Gear Checklist
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need for the Kailash Kora, organized by category and season.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-serif font-bold mb-4">Season Conditions</h2>
            <Tabs value={selectedSeason} onValueChange={setSelectedSeason}>
              <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full">
                {Object.entries(gearData.seasons).map(([key, season]) => {
                  const Icon = seasonIcons[key] || Sun
                  return (
                    <TabsTrigger key={key} value={key} className="flex items-center gap-2">
                      <Icon className="w-4 h-4" />
                      <span className="hidden sm:inline">{season.name.split(' ')[0]}</span>
                    </TabsTrigger>
                  )
                })}
              </TabsList>
              
              {Object.entries(gearData.seasons).map(([key, season]) => (
                <TabsContent key={key} value={key}>
                  <Card className={season.recommended ? "border-green-500/30 bg-green-500/5" : "border-amber-500/30 bg-amber-500/5"}>
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-semibold mb-1">{season.name}</h3>
                          <p className="text-sm text-muted-foreground">{season.conditions}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-center">
                            <p className="text-xs text-muted-foreground">Temperature</p>
                            <p className="font-semibold">{season.temperature}</p>
                          </div>
                          <Badge variant={season.recommended ? "default" : "secondary"} className={season.recommended ? "bg-green-500" : ""}>
                            {season.recommended ? "Recommended" : "Challenging"}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-serif font-bold mb-8">Complete Gear List</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {gearData.categories.map((category, index) => {
              const Icon = categoryIcons[category.name] || Backpack
              return (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="h-full">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-gold" />
                        </div>
                        <CardTitle className="text-lg font-serif">{category.name}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {category.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm">
                            <div className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5 ${item.essential ? 'bg-gold/20' : 'bg-muted'}`}>
                              {item.essential && <Check className="w-3 h-3 text-gold" />}
                            </div>
                            <div className="flex-1">
                              <span className={item.essential ? 'font-medium' : 'text-muted-foreground'}>
                                {item.name}
                              </span>
                              <span className="text-muted-foreground text-xs ml-2">
                                ({item.quantity})
                              </span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gold/5 border-gold/20">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Essential Items Legend</h3>
                  <p className="text-sm text-muted-foreground">
                    Items marked with a gold checkmark are essential for the Kailash Kora. 
                    These should be prioritized when packing. Optional items enhance comfort 
                    but can be omitted if you need to reduce weight.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
