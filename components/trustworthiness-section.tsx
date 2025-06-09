import { Award, Hotel, Languages, Utensils, Bus, Users, Heart } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TrustworthinessSection() {
  const trustPoints = [
    {
      icon: <Award className="w-10 h-10 text-[#fbb82b]" />,
      title: "Experience",
      description: "Been in the tourism industry since 1997. Organizing Umrah packages since 2005.",
    },
    {
      icon: <Hotel className="w-10 h-10 text-[#fbb82b]" />,
      title: "Prime Accommodation",
      description: "Hotels booked nearer to holy sites (near Ka'bah in Mecca and near Masjid-un-Nabawi in Madinah).",
    },
    {
      icon: <Languages className="w-10 h-10 text-[#fbb82b]" />,
      title: "Language Expertise",
      description: "Our operators know Arabic language, enabling better arrangements and excellent service.",
    },
    {
      icon: <Utensils className="w-10 h-10 text-[#fbb82b]" />,
      title: "Quality Dining",
      description: "Delicious Indian food with best dining experiences throughout your journey.",
    },
    {
      icon: <Bus className="w-10 h-10 text-[#fbb82b]" />,
      title: "Comfortable Transport",
      description: "Luxurious bus transport for all your travel needs during the pilgrimage.",
    },
    {
      icon: <Users className="w-10 h-10 text-[#fbb82b]" />,
      title: "Customized Packages",
      description: "We value the needs of our Hajis and create packages tailored to your requirements.",
    },
    {
      icon: <Heart className="w-10 h-10 text-[#fbb82b]" />,
      title: "Family-Like Care",
      description: "We consider our Hajis more like family and provide services that ensure complete satisfaction.",
    },
  ]

  return (
    <section className="py-16">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Why Choose Us</h2>
          <p className="text-muted-foreground">
            At ANNAI AAYSHA HAJ & UMRAH, we pride ourselves on providing exceptional service and care to all our
            pilgrims.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center max-w-7xl mx-auto">
          {trustPoints.map((point, index) => (
            <Card key={index} className="transition-transform hover:scale-[1.02] w-full max-w-sm">
              <CardHeader className="flex flex-col items-center text-center pb-2">
                {point.icon}
                <CardTitle className="mt-4 text-xl">{point.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center text-muted-foreground">{point.description}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
