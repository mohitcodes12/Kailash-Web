"use client"

import { AlertTriangle } from "lucide-react"

export function DisclaimerBanner() {
  return (
    <div className="bg-gold/10 border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-center gap-2 text-center">
          <AlertTriangle className="w-4 h-4 text-gold flex-shrink-0" />
          <p className="text-xs sm:text-sm text-foreground/80">
            <span className="font-semibold">Mount Kailash is a sacred site.</span>{" "}
            <span className="hidden sm:inline">
              Climbing is prohibited and dangerous. This website is for educational purposes only.
            </span>
            <span className="sm:hidden">Climbing is prohibited.</span>
          </p>
        </div>
      </div>
    </div>
  )
}
