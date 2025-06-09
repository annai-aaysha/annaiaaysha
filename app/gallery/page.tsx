import type { Metadata } from "next"
import Gallery from "./gallery"

export const metadata: Metadata = {
  title: "Gallery | ANNAI AAYSHA HAJ & UMRAH",
  description: "View our gallery of Haj and Umrah tours",
}

export default function GalleryPage() {
  return (
    <div className="container px-4 py-12 md:py-16 lg:py-24">
      <h1 className="mb-8 text-3xl font-bold text-center md:text-4xl lg:text-5xl">Our Gallery</h1>
      <p className="max-w-3xl mx-auto mb-12 text-center text-muted-foreground">
        Explore our collection of photos from our Haj and Umrah tours, showcasing the spiritual journey, accommodations,
        and experiences we provide.
      </p>
      <Gallery />
    </div>
  )
}
