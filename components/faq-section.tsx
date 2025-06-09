"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FaqSection() {
  // Sample FAQs - would be replaced with actual content
  const faqs = [
    {
      question: "What documents are required for Umrah?",
      answer:
        "For Umrah, you'll need a valid passport with at least 6 months validity, Umrah visa, vaccination certificates, and passport-sized photographs with white background. We'll guide you through the entire documentation process.",
    },
    {
      question: "How far in advance should I book my Umrah package?",
      answer:
        "We recommend booking your Umrah package at least 2-3 months in advance, especially during peak seasons like Ramadan. This ensures we can secure the best accommodations and flight options for you.",
    },
    {
      question: "Do you provide guidance on Umrah rituals?",
      answer:
        "Yes, we provide complete guidance on all Umrah rituals. Our experienced guides will accompany you throughout the journey and assist you with all religious practices and rituals.",
    },
    {
      question: "What is included in your Umrah packages?",
      answer:
        "Our standard Umrah packages include visa processing, return flights, hotel accommodation near the holy sites, transportation between cities, meals, and guided assistance for all rituals. Premium packages include additional amenities and services.",
    },
    {
      question: "Can I customize my Umrah package?",
      answer:
        "We understand that each pilgrim has unique needs. We offer customized packages where you can choose your preferred accommodation, duration of stay, and additional services as per your requirements and budget.",
    },
    {
      question: "Do you offer group discounts?",
      answer:
        "Yes, we offer special rates for group bookings. The discount varies based on the group size and package selected. Please contact us for more details on group packages.",
    },
    {
      question: "Do you offer discounts for Ulamas?",
      answer:
        "We offer exclusive offers for Ulamas, Ustads, and their families. *We also offer discounts for people who are referred by them",
    }
  ]

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
          <p className="text-muted-foreground">Find answers to common questions about our Haj and Umrah services.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
