"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BrochureModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Show modal when component mounts
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const scrollToPackages = () => {
    setIsOpen(false)
    // Wait for modal to close, then scroll to packages
    setTimeout(() => {
      const packagesSection = document.getElementById("tour-packages")
      if (packagesSection) {
        packagesSection.scrollIntoView({ behavior: "smooth" })
      }
    }, 300)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-3xl p-4 mx-4 bg-background rounded-lg shadow-lg border">
        <Button variant="ghost" size="icon" className="absolute top-2 right-2" onClick={() => setIsOpen(false)}>
          <X className="w-5 h-5" />
          <span className="sr-only">Close</span>
        </Button>

        <div className="p-2">
          <h2 className="mb-4 text-xl font-bold text-center">Special Offers for Haj & Umrah</h2>
          <div className="relative w-full overflow-hidden rounded-md aspect-[3/4] md:aspect-[16/9]">
            <Image
              src="/gallery3.jpg?height=800&width=1200"
              alt="ANNAI AAYSHA HAJ & UMRAH Brochure"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex justify-center mt-4">
            <Button
              className="bg-[#fbb82b] hover:bg-[#fbb82b]/90 text-[#222f37] font-semibold"
              onClick={scrollToPackages}
            >
              View Our Packages
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
