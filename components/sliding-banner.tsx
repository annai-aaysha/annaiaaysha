"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SlidingBanner() {
  const bannerImages = [
    { src: "/kaaba1.jpg?height=600&width=1600", alt: "Kaaba" },
    { src: "/Ka'bah_front.jpg?height=600&width=1600", alt: "Hajis in front of Kaaba" },
    { src: "/Slm_fam.jpg?height=600&width=1600", alt: "Masjid al-Nabawi in Madinah" },
    { src: "/kaaba2.jpg?height=600&width=1600", alt: "Kaaba" },
    { src: "/ayp.jpg?height=600&width=1600", alt: "Hajis Quba Masjid Back" },
    { src: "/madinah1.jpeg?height=600&width=1600", alt: "Madinah" },
    { src: "/room.jpg?height=600&width=1600", alt: "Pilgrims performing Tawaf" },
    { src: "/food.jpg?height=600&width=1600", alt: "Group of pilgrims" },
    { src: "/madinah2.jpeg?height=600&width=1600", alt: "Kaaba" },
    
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + bannerImages.length) % bannerImages.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {bannerImages.map((image, index) => (
          <div key={index} className="relative w-full flex-shrink-0 h-[300px] md:h-[400px] lg:h-[500px]">
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute transform -translate-y-1/2 left-4 top-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full"
        onClick={prevSlide}
      >
        <ChevronLeft className="w-6 h-6" />
        <span className="sr-only">Previous slide</span>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute transform -translate-y-1/2 right-4 top-1/2 bg-black/20 hover:bg-black/40 text-white rounded-full"
        onClick={nextSlide}
      >
        <ChevronRight className="w-6 h-6" />
        <span className="sr-only">Next slide</span>
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-[#fbb82b]" : "bg-white/50"}`}
            onClick={() => setCurrentIndex(index)}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
