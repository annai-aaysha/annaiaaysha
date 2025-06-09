import type { Metadata } from "next"
import { Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Reviews | ANNAI AAYSHA HAJ & UMRAH",
  description: "Customer reviews and testimonials for our Haj and Umrah services",
}

export default function ReviewsPage() {
  // Sample reviews - would be replaced with actual content
  const reviews = [
    {
      id: 1,
      name: "Mohammed Kalifathullah",
      rating: 5,
      text: "Our Umrah trip was perfectly organized. The accommodations were close to the holy sites as promised, and the staff was very helpful throughout our journey.",
    },
    {
      id: 2,
      name: "ELIAS BASHA K",
      rating: 5,
      text: "The food was delicious and the transportation was comfortable. I appreciate how they took care of all the details so we could focus on our spiritual journey.",
    },
    {
      id: 3,
      name: "Raja Mohammed",
      rating: 5,
      text: "Very professional service. The guides were knowledgeable and the entire experience was smooth. I would recommend their services to anyone planning Umrah.",
    },
    {
      id: 4,
      name: "Suhail Rahman",
      rating: 5,
      text: "This was my first Umrah and I was nervous, but the team made everything easy. The hotels were exactly as described - very close to the holy sites.",
    },
    {
      id: 5,
      name: "Khaleel Razman",
      rating: 5,
      text: "Excellent service from start to finish. They truly treat you like family as they claim. Will definitely choose them again for our next pilgrimage.",
    },
    {
      id: 6,
      name: "Sakina Beevi",
      rating: 5,
      text: "The package was worth every penny. Clean accommodations, timely transportation, and helpful guides. Thank you for making our journey memorable.",
    },
  ]

  return (
    <div className="container px-4 py-12 md:py-16 lg:py-24">
      <h1 className="mb-8 text-3xl font-bold text-center md:text-4xl lg:text-5xl">Customer Reviews</h1>
      <p className="max-w-3xl mx-auto mb-12 text-center text-muted-foreground">
        Read what our customers have to say about their experiences with our Haj and Umrah services.
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <div key={review.id} className="p-6 rounded-lg shadow-md bg-card">
            <div className="flex mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i < review.rating ? "fill-[#fbb82b] text-[#fbb82b]" : "text-gray-300"}`}
                />
              ))}
            </div>
            <p className="mb-4 italic text-muted-foreground">"{review.text}"</p>
            <p className="font-semibold">- {review.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
