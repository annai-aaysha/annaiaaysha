"use client"

import { Button } from "@/components/ui/button"
import { Mail, MapPin, Menu, MoonIcon, Phone, SunIcon, X } from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // Function to scroll to contact form
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-form")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <>
      {/* Sticky Top Bar - Desktop Only - Outside header for proper sticking */}
      <div className="fixed top-0 left-0 right-0 z-50 hidden py-2 bg-[#fbb82b] text-[#222f37] md:block shadow-sm">
        <div className="container flex items-center justify-between px-4">
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center">
              <Phone className="w-3.5 h-3.5 mr-1.5" />
              <a href="tel:+918608517944" className="hover:underline">
                +91 86085 17944
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-3.5 h-3.5 mr-1.5" />
              <a href="mailto:aahajumrah@gmail.com" className="hover:underline">
                aahajumrah@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <MapPin className="w-3.5 h-3.5 mr-1.5" />
              <a
                href="https://maps.google.com/?q=ANNAI+AAYSHA+HAJ+%26+UMRAH"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Office location, Chennai
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <a
              href="https://wa.me/918608517944"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm hover:underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="mr-1"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg>
              WhatsApp
            </a>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="bg-[#222f37]/10 hover:bg-[#222f37]/20 rounded-full w-7 h-7 p-0"
            >
              {theme === "dark" ? (
                <SunIcon className="h-[1rem] w-[1rem]" />
              ) : (
                <MoonIcon className="h-[1rem] w-[1rem]" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Sticky Mobile Top Contact Bar - Outside header for proper sticking */}
      <div className="fixed top-0 left-0 right-0 z-50 py-2 bg-[#fbb82b] text-[#222f37] md:hidden shadow-sm">
        <div className="container flex items-center justify-between px-4">
          <div className="flex items-center space-x-3">
            <a href="tel:+918608517944" className="flex items-center text-sm hover:underline">
              <Phone className="w-3.5 h-3.5 mr-1" />
              <span className="hidden xs:inline">+91 86085 17944</span>
              <span className="xs:hidden">Call</span>
            </a>
            <a
              href="https://wa.me/918608517944"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm hover:underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                className="mr-1"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg>
              <span className="hidden xs:inline">WhatsApp</span>
              <span className="xs:hidden">Chat</span>
            </a>
            <a
              href="https://maps.google.com/?q=Chennai,Tamil+Nadu,India"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm hover:underline"
            >
              <MapPin className="w-3.5 h-3.5 mr-1" />
              <span className="hidden sm:inline">Chennai</span>
              <span className="sm:hidden">Map</span>
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <a href="mailto:info@annaiaaysha.com" className="flex items-center text-sm hover:underline">
              <Mail className="w-3.5 h-3.5 mr-1" />
              <span className="hidden sm:inline">Email</span>
            </a>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="bg-[#222f37]/10 hover:bg-[#222f37]/20 rounded-full w-6 h-6 p-0"
            >
              {theme === "dark" ? <SunIcon className="h-3 w-3" /> : <MoonIcon className="h-3 w-3" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Header with proper top margin to account for fixed top bar */}
      <header className="relative mt-[38px] md:mt-[38px]">
        {/* Main Navigation - Now sticks below the fixed top bar */}
        <div
          className={`sticky top-[42px] md:top-[38px] w-full transition-all duration-300 bg-[#222f37] text-white z-40 ${
            scrolled ? "shadow-md" : ""
          }`}
        >
          <div className="container flex items-center justify-between h-20 px-4 md:h-24">
            {/* Logo and Business Name */}
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center">
                <div className="relative w-10 h-10 md:w-12 md:h-12 overflow-hidden rounded-full bg-white p-1 flex-shrink-0">
                  <Image
                    src="/logo.png"
                    alt="ANNAI AAYSHA Logo"
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base font-bold md:text-xl lg:text-2xl">ANNAI AAYSHA HAJ & UMRAH</div>
                  <div className="text-xs text-[#fbb82b] md:text-sm font-medium flex items-center gap-1 flex-wrap">
                    <span>YOUR TRUSTED UMRAH</span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-[#8cd186] text-[#222f37]">
                      COMPANION
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            {/* Navigation - Desktop */}
            <nav className="items-center hidden md:flex">
              <div className="flex items-center">
                {[
                  { name: "Home", path: "/" },
                  { name: "Gallery", path: "/gallery" },
                  { name: "Reviews", path: "/reviews" },
                  { name: "About Us", path: "/about" },
                ].map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors hover:text-[#fbb82b] ${
                      pathname === item.path ? "text-[#fbb82b]" : ""
                    }`}
                  >
                    {item.name}
                    {pathname === item.path && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#fbb82b]"></span>
                    )}
                  </Link>
                ))}
                {/* Only show Contact Us button on home page */}
                {pathname === "/" && (
                  <Button
                    className="ml-4 bg-[#fbb82b] hover:bg-[#fbb82b]/90 text-[#222f37] font-medium"
                    onClick={scrollToContact}
                  >
                    Contact Us
                  </Button>
                )}
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(true)}
                className="text-white hover:bg-white/10"
              >
                <Menu className="w-6 h-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 bg-[#222f37] text-white">
            <div className="container flex flex-col h-full p-4">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#fbb82b]/30">
                <Link href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
                  <div className="relative w-10 h-10 overflow-hidden rounded-full bg-white p-1 flex-shrink-0">
                    <Image
                      src="/logo.png"
                      alt="ANNAI AAYSHA Logo"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-bold">ANNAI AAYSHA HAJ & UMRAH</div>
                    <div className="text-sm text-[#fbb82b] font-medium flex items-center gap-1 flex-wrap">
                      <span>YOUR TRUSTED UMRAH</span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-[#8cd186] text-[#222f37]">
                        COMPANION
                      </span>
                    </div>
                  </div>
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:bg-white/10"
                >
                  <X className="w-6 h-6" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>

              {/* Quick Contact Actions */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                <a
                  href="tel:+918608517944"
                  className="flex items-center justify-center p-3 bg-[#fbb82b] text-[#222f37] rounded-lg font-medium hover:bg-[#fbb82b]/90 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
                <a
                  href="https://wa.me/918608517944"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="mr-2"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
                  </svg>
                  WhatsApp
                </a>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex flex-col mt-8 space-y-2">
                {[
                  { name: "Home", path: "/" },
                  { name: "Gallery", path: "/gallery" },
                  { name: "Reviews", path: "/reviews" },
                  { name: "About Us", path: "/about" },
                ].map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`relative py-3 px-4 text-lg font-medium transition-colors rounded-lg ${
                      pathname === item.path
                        ? "text-[#fbb82b] bg-[#fbb82b]/10"
                        : "hover:text-[#fbb82b] hover:bg-white/5"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                    {pathname === item.path && (
                      <span className="absolute left-0 top-0 bottom-0 w-1 bg-[#fbb82b] rounded-r"></span>
                    )}
                  </Link>
                ))}
              </nav>

              {/* Contact Information */}
              <div className="flex flex-col mt-auto mb-8 space-y-4 pt-6 border-t border-[#fbb82b]/30">
                <h4 className="text-[#fbb82b] font-semibold text-sm uppercase tracking-wide">Contact Information</h4>
                <div className="grid grid-cols-1 gap-3">
                  <a
                    href="mailto:info@annaiaaysha.com"
                    className="flex items-center hover:text-[#fbb82b] transition-colors p-2 rounded-lg hover:bg-white/5"
                  >
                    <Mail className="w-5 h-5 mr-3 text-[#fbb82b]" />
                    <div>
                      <div className="text-sm text-gray-300">Email</div>
                      <div>info@annaiaaysha.com</div>
                    </div>
                  </a>
                  <a
                    href="https://maps.google.com/?q=Chennai,Tamil+Nadu,India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-[#fbb82b] transition-colors p-2 rounded-lg hover:bg-white/5"
                  >
                    <MapPin className="w-5 h-5 mr-3 text-[#fbb82b]" />
                    <div>
                      <div className="text-sm text-gray-300">Location</div>
                      <div>Chennai, Tamil Nadu, India</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
