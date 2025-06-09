import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function ReviewsSection() {
  // Sample reviews for the landing page
  const reviews = [
    {
      id: 1,
      name: "Mohammed Kalifathullah",
      rating: 5,
      text: "Our Umrah trip was perfectly organized. The accommodations were close to the holy sites as promised.",
    },
    {
      id: 2,
      name: "ELIAS BASHA K",
      rating: 5,
      text: "The food was delicious and the transportation was comfortable. Highly recommended!",
    },
    {
      id: 3,
      name: "Raja Mohammed",
      rating: 5,
      text: "Very professional service. The guides were knowledgeable and the entire experience was smooth.",
    },
    {
      id: 4,
      name: "Suhail Rahman",
      rating: 5,
      text: "This was my first Umrah and I was nervous, but the team made everything easy.",
    },
  ]

  return (
    <section className="py-16">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">What Our Customers Say</h2>
          <p className="text-muted-foreground">
            Read testimonials from our satisfied customers who have experienced our exceptional Haj and Umrah services.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {reviews.map((review) => (
            <Card key={review.id} className="transition-transform hover:scale-[1.02] w-full">
              <CardContent className="p-6">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < review.rating ? "fill-[#fbb82b] text-[#fbb82b]" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <p className="mb-4 text-sm italic text-muted-foreground">"{review.text}"</p>
                <p className="text-sm font-semibold">- {review.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="/reviews"
            className="inline-block px-6 py-3 text-white bg-[#222f37] rounded-lg hover:bg-[#222f37]/90 transition-colors"
          >
            View All Reviews
          </a>
        </div>
      </div>
    </section>
  )
}
