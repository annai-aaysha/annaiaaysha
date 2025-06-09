import AIChatbot from "@/components/ai-chatbot"
import Footer from "@/components/footer"
import Header from "@/components/header"
import StickyContactButtons from "@/components/sticky-contact-buttons"
import StickyEnquiryButton from "@/components/sticky-enquiry-button"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import { Toaster } from "sonner"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Annai Aaysha Haj & Umrah Services",
    template: "%s | Annai Aaysha Haj & Umrah Services",
  },
  description: "Your trusted partner for Haj and Umrah services. We provide comprehensive packages, expert guidance, and personalized support for your spiritual journey.",
  keywords: ["Haj", "Umrah", "Islamic Travel", "Mecca", "Medina", "Pilgrimage", "Muslim Travel"],
  authors: [{ name: "Annai Aaysha" }],
  creator: "Annai Aaysha",
  publisher: "Annai Aaysha",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.annaiaaysha.com"),
  alternates: {
    canonical: "https://www.annaiaaysha.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.annaiaaysha.com",
    siteName: "Annai Aaysha Haj & Umrah Services",
    title: "Annai Aaysha Haj & Umrah Services",
    description: "Your trusted partner for Haj and Umrah services. We provide comprehensive packages, expert guidance, and personalized support for your spiritual journey.",
    images: [
      {
        url: "/logo.png",
        width: 1600,
        height: 600,
        alt: "Annai Aaysha Haj & Umrah Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Annai Aaysha Haj & Umrah Services",
    description: "Your trusted partner for Haj and Umrah services. We provide comprehensive packages, expert guidance, and personalized support for your spiritual journey.",
    images: ["/logo.png"],
    creator: "@annaiaaysha",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#222f37" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Chennai" />
        <meta name="geo.position" content="13.0827;80.2707" />
        <meta name="ICBM" content="13.0827, 80.2707" />
        <link rel="alternate" href="https://annai-aaysha.com" hrefLang="en-IN" />
        <link rel="alternate" href="https://annai-aaysha.com/ta" hrefLang="ta-IN" />
        <link rel="alternate" href="https://annai-aaysha.com/ar" hrefLang="ar-SA" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange={false}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <AIChatbot />
          <StickyEnquiryButton />
          <StickyContactButtons />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
