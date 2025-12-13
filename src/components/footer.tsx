"use client"

import Link from "next/link"
import { Mountain, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Mountain className="w-8 h-8 text-gold" />
              <span className="font-serif text-xl font-semibold">Kailash Parvat</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-md mb-4">
              An educational resource dedicated to sharing knowledge about Mount Kailash, 
              one of the most sacred mountains on Earth.
            </p>
            <div className="p-4 bg-muted/50 rounded-xl border border-border">
              <p className="text-xs text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Important Notice:</strong> Mount Kailash is a sacred site. 
                Climbing is prohibited and dangerous. This website is for educational and informational purposes only.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-serif font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sacred" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                  Sacred Significance
                </Link>
              </li>
              <li>
                <Link href="/routes" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                  Routes & Kora
                </Link>
              </li>
              <li>
                <Link href="/gear" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                  Gear Checklist
                </Link>
              </li>
              <li>
                <Link href="/history" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                  History & Attempts
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/travel" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                  Travel & Permits
                </Link>
              </li>
              <li>
                <Link href="/assistant" className="text-sm text-muted-foreground hover:text-gold transition-colors">
                  AI Assistant
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-gold fill-gold" /> for spiritual seekers
          </p>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Kailash Parvat Guide. For educational purposes only.
          </p>
        </div>
      </div>
    </footer>
  )
}
