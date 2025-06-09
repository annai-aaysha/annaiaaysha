import Link from "next/link"
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#222f37] text-white">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Company Info and Links */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* About Us Column */}
              <div>
                <h3 className="mb-4 text-lg font-semibold text-[#fbb82b]">ANNAI AAYSHA HAJ & UMRAH</h3>
                <p className="mb-4 text-sm text-gray-300">
                  Your trusted partner for Haj and Umrah tours since 1997. We provide exceptional services to make your
                  spiritual journey comfortable and memorable.
                </p>
                <Link href="/about" className="inline-block text-sm text-[#fbb82b] hover:underline">
                  Learn more about us
                </Link>
              </div>

              {/* Quick Links and Contact */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* Quick Links */}
                <div>
                  <h3 className="mb-4 text-lg font-semibold text-[#fbb82b]">Quick Links</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="/" className="hover:text-[#fbb82b] transition-colors">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/gallery" className="hover:text-[#fbb82b] transition-colors">
                        Gallery
                      </Link>
                    </li>
                    <li>
                      <Link href="/reviews" className="hover:text-[#fbb82b] transition-colors">
                        Reviews
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" className="hover:text-[#fbb82b] transition-colors">
                        About Us
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Contact Us */}
                <div>
                  <h3 className="mb-4 text-lg font-semibold text-[#fbb82b]">Contact Us</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex">
                      <Phone className="flex-shrink-0 w-4 h-4 mr-2 text-[#fbb82b] mt-0.5" />
                      <a href="tel:+918608517944" className="hover:text-[#fbb82b]">
                        +91 86085 17944
                      </a>
                    </li>
                    <li className="flex">
                      <Mail className="flex-shrink-0 w-4 h-4 mr-2 text-[#fbb82b] mt-0.5" />
                      <a href="mailto:aahajumrah@gmail.com" className="hover:text-[#fbb82b]">
                        aahajumrah@gmail.com
                      </a>
                    </li>
                    <li className="flex">
                      <MapPin className="flex-shrink-0 w-4 h-4 mr-2 text-[#fbb82b] mt-0.5" />
                      <a
                        href="https://maps.google.com/?q=ANNAI+AAYSHA+HAJ+%26+UMRAH"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#fbb82b]"
                      >
                        4/30, PAARI SAALAI, near JAMIA MASJID, JJ Nagar, MOGAPPAIR EAST, CHENNAI - 600037.
                      </a>
                    </li>
                  </ul>

                  {/* Social Media */}
                  <div className="mt-6">
                    <h4 className="mb-3 text-sm font-semibold text-[#fbb82b]">Follow Us</h4>
                    <div className="flex space-x-3">
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 transition-colors rounded-full hover:bg-[#fbb82b]/20"
                      >
                        <Facebook className="w-4 h-4" />
                        <span className="sr-only">Facebook</span>
                      </a>
                      <a
                        href="https://www.instagram.com/annaiaaisha_umrah/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 transition-colors rounded-full hover:bg-[#fbb82b]/20"
                      >
                        <Instagram className="w-4 h-4" />
                        <span className="sr-only">Instagram</span>
                      </a>
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 transition-colors rounded-full hover:bg-[#fbb82b]/20"
                      >
                        <Twitter className="w-4 h-4" />
                        <span className="sr-only">Twitter</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp Group Join Button - Replaced Newsletter */}
            <div className="mt-8 pt-6 border-t border-gray-700">
              <h4 className="mb-3 text-sm font-medium text-[#fbb82b]">Join our WhatsApp Group</h4>
              <p className="mb-3 text-xs text-gray-300">
                Stay updated with our latest offers, travel tips, and important announcements.
              </p>
              <a
                href="https://chat.whatsapp.com/JwbSFNnd2Rl3zIV7oJSByA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-700 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="mr-2"
                  viewBox="0 0 16 16"
                >
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                </svg>
                Join WhatsApp Group
              </a>
            </div>
          </div>

          {/* Map Section */}
          <div className="lg:col-span-1">
            <h3 className="mb-4 text-lg font-semibold text-[#fbb82b]">Our Location</h3>
            <div className="relative w-full h-64 overflow-hidden rounded-lg border border-gray-600">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.2496765098485!2d80.18447019999999!3d13.0810903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5263b3ca2098a7%3A0x6c3043f3938af5e8!2sANNAI%20AAYSHA%20HAJ%20%26%20UMRAH!5e1!3m2!1sen!2sin!4v1749294723664!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ANNAI AAYSHA HAJ & UMRAH Office Location"
                className="md:grayscale md:hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="mt-3 text-center">
              <a
                href="https://maps.google.com/?q=123+Main+Street,Chennai,Tamil+Nadu,India"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-[#fbb82b] hover:underline"
              >
                <MapPin className="w-4 h-4 mr-1" />
                View on Google Maps
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-8 text-sm text-center border-t border-gray-700">
          <p>&copy; {new Date().getFullYear()} ANNAI AAYSHA HAJ & UMRAH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
