import type { Metadata } from "next";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Kailash Parvat | Sacred Mountain Guide",
  description: "Discover the spiritual significance of Mount Kailash (Kailash Parvat), sacred to Hinduism, Buddhism, Jainism, and Bon. Learn about the Kora pilgrimage, travel permits, and more.",
  keywords: "Mount Kailash, Kailash Parvat, sacred mountain, pilgrimage, Kora, Tibet, Hinduism, Buddhism, Jainism, Bon, spiritual journey",
  openGraph: {
    title: "Kailash Parvat | Sacred Mountain Guide",
    description: "Discover the spiritual significance of Mount Kailash, sacred to billions across four religions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Script
          id="orchids-browser-logs"
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts/orchids-browser-logs.js"
          strategy="afterInteractive"
          data-orchids-project-id="e0323653-cf4b-414c-88a2-0108ec9df1da"
        />
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 pt-16 lg:pt-20">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        <VisualEditsMessenger />
      </body>
    </html>
  );
}