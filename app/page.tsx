import BrochureModal from "@/components/brochure-modal"
import CompanyLogos from "@/components/company-logos"
import ContactForm from "@/components/contact-form"
import FaqSection from "@/components/faq-section"
import ReviewsSection from "@/components/reviews-section"
import SlidingBanner from "@/components/sliding-banner"
import TourPackages from "@/components/tour-packages"
import TrustworthinessSection from "@/components/trustworthiness-section"

export default function Home() {
  return (
    <>
      <BrochureModal />
      <SlidingBanner />
      <CompanyLogos />
      <TourPackages />
      <TrustworthinessSection />
      <ReviewsSection />
      <FaqSection />
      <ContactForm />
    </>
  )
}
