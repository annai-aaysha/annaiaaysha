"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Image from "next/image"

export default function TourPackages() {
  // Sample tour packages - would be replaced with actual content
  const packages = [
    {
      id: 1,
      name: "Economy Group Package",
      price: "₹85,000",
      image: "/economy.jpg?height=300&width=400",
      details: "900m or shuttle bus service from Haram entrance gate. Includes round flight tickets, visa, insurance, transport, delicious Indian food, guidance, and local ziyarah visits to important sites in Mecca and Madinah.",
    },
    {
      id: 2,
      name: "Semi-deluxe Group Package",
      price: "₹95,000",
      image: "/deluxe.webp?height=300&width=400",
      details: "500m distance accommodation from Haram entrance gate. Includes round flight tickets, visa, insurance, transport, delicious Indian food, guidance, and local ziyarah visits to important sites in Mecca and Madinah.",
    },
    {
      id: 3,
      name: "Deluxe Group Package",
      price: "₹1,05,000",
      image: "/semid.jpg?height=300&width=400",
      details: "Accommodation within 200 metres of Haram entrance gate. Includes round flight tickets, visa, insurance, transport, delicious Indian food, guidance, and local ziyarah visits to important sites in Mecca and Madinah.",
    },
    {
      id: 4,
      name: "VIP Group Package",
      price: "₹1,35,000",
      image: "/vip.jpg?height=300&width=400",
      details: "5-star accommodation in Makkah very near to Haram entrance gate. Includes round flight tickets, visa, insurance, transport, delicious Indian food, guidance, and local ziyarah visits to important sites in Mecca and Madinah.",
    },
    {
      id: 5,
      name: "Standard Umrah Package",
      price: "₹1,25,000",
      image: "/standard.jpeg?height=300&width=400",
      details: "10 days package including flights, accommodation near Haram, transportation, meals, and local ziyarah visits to important sites in Mecca and Madinah.",
    },
    {
      id: 6,
      name: "Premium Umrah Package",
      price: "₹1,99,000",
      image: "/premium_ind.jpg?height=300&width=400",
      details: "14 days luxury package with 5-star accommodation, VIP transportation, guided tours, and comprehensive ziyarah visits to important sites in Mecca and Madinah.",
    },
    {
      id: 7,
      name: "Family Umrah Package",
      price: "₹1,49,000 per person",
      image: "/premium.jpg?height=300&width=400",
      details: "12 days package designed for families with special amenities, family rooms, and guided ziyarah visits to important sites in Mecca and Madinah.",
    },
  ]

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-form")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="tour-packages" className="py-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Tour Packages</h2>
          <p className="text-muted-foreground">
            Choose from our carefully designed Haj and Umrah packages that cater to different needs and preferences.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="mb-6 text-2xl font-bold text-center">Group Packages</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {packages.slice(0, 4).map((pkg) => (
              <Card key={pkg.id} className="overflow-hidden transition-shadow hover:shadow-lg">
                <div className="relative w-full h-48">
                  <Image src={pkg.image || "/placeholder.svg"} alt={pkg.name} fill className="object-cover" />
                </div>
                <CardHeader>
                  <h3 className="text-xl font-bold">{pkg.name}</h3>
                  <p className="text-lg font-semibold text-[#fbb82b]">{pkg.price}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{pkg.details}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#222f37] hover:bg-[#222f37]/90 text-white" onClick={scrollToContact}>
                    Contact Us
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-6 text-2xl font-bold text-center">Individual Packages</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {packages.slice(4).map((pkg) => (
              <Card key={pkg.id} className="overflow-hidden transition-shadow hover:shadow-lg">
                <div className="relative w-full h-48">
                  <Image src={pkg.image || "/placeholder.svg"} alt={pkg.name} fill className="object-cover" />
                </div>
                <CardHeader>
                  <h3 className="text-xl font-bold">{pkg.name}</h3>
                  <p className="text-lg font-semibold text-[#fbb82b]">{pkg.price}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{pkg.details}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#222f37] hover:bg-[#222f37]/90 text-white" onClick={scrollToContact}>
                    Contact Us
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
