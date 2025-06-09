import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About Us | ANNAI AAYSHA HAJ & UMRAH",
  description: "Learn about ANNAI AAYSHA HAJ & UMRAH - your trusted partner for Haj and Umrah tours since 1997",
}

export default function AboutPage() {
  return (
    <div className="container px-4 py-12 md:py-16 lg:py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-8 text-3xl font-bold text-center md:text-4xl lg:text-5xl">About Us</h1>

        <div className="flex justify-center mb-12">
          <div className="relative w-full h-64 overflow-hidden rounded-lg md:h-80">
            <Image
              src="/about.jpg?height=400&width=800"
              alt="ANNAI AAYSHA HAJ & UMRAH Team"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="mb-4 text-2xl font-bold">Our Mission</h2>
            <p className="text-muted-foreground">
              Our mission is to provide exceptional Haj and Umrah services that enable pilgrims to focus entirely on
              their spiritual journey. We strive to make the sacred pilgrimage accessible, comfortable, and meaningful
              for all our clients.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">Our Vision</h2>
            <p className="text-muted-foreground">
              To be the most trusted and preferred Haj and Umrah service provider, known for our dedication to pilgrim
              comfort, proximity to holy sites, and personalized care that makes every pilgrim feel like family.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">Our Story</h2>
            <p className="mb-4 text-muted-foreground">
              ANNAI AAYSHA HAJ & UMRAH has been in the tourism industry since 1997, specializing in Umrah packages since
              2005. With decades of experience, we have perfected the art of organizing pilgrimages that are both
              spiritually fulfilling and comfortable.
            </p>
            <p className="text-muted-foreground">
              Our founder's deep knowledge of Arabic and the holy regions allows us to secure accommodations closer to
              the sacred sites, negotiate better services, and provide an experience that larger companies often cannot
              match.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold">Why Choose Us</h2>
            <ul className="space-y-4 list-disc list-inside text-muted-foreground">
              <li>
                <span className="font-medium text-foreground">Decades of Experience:</span> In the tourism industry
                since 1997, organizing Umrah packages since 2005.
              </li>
              <li>
                <span className="font-medium text-foreground">Prime Locations:</span> Hotels booked nearer to holy sites
                (near Ka'bah in Mecca and near Masjid-un-Nabawi in Madinah).
              </li>
              <li>
                <span className="font-medium text-foreground">Language Expertise:</span> Our operators know Arabic,
                enabling better arrangements and excellent service.
              </li>
              <li>
                <span className="font-medium text-foreground">Quality Dining:</span> Delicious Indian food with best
                dining experiences.
              </li>
              <li>
                <span className="font-medium text-foreground">Comfortable Transport:</span> Luxurious bus transportation
                for all journeys.
              </li>
              <li>
                <span className="font-medium text-foreground">Personalized Packages:</span> We value the needs of our
                Hajis and create customized experiences.
              </li>
              <li>
                <span className="font-medium text-foreground">Family-Like Care:</span> We consider our Hajis more like
                family and provide services that ensure complete satisfaction.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
