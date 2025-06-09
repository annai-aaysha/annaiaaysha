"use client"

import Image from "next/image"

const companies = [
  {
    name: "Pullman",
    logo: "/companies/logo-pullman.svg",
  },
  {
    name: "Swiss Maqam",
    logo: "/companies/swiss_maqam.png",
  },
  {
    name: "Makkah Tower",
    logo: "/companies/makkah_tower.jpg",
  },
  {
    name: "Oman Air",
    logo: "/companies/omain_air.png",
  },
  {
    name: "Movenpick",
    logo: "/companies/movenpick.png",
  },
  {
    name: "Gulf Air",
    logo: "/companies/gulfair.png",
  },
  {
    name: "Hilton",
    logo: "/companies/hilton.png",
  },
  {
    name: "Swissotel",
    logo: "/companies/swissotel.png",
  },
  {
    name: "Emirates",
    logo: "/companies/emirates.png",
  },
  {
    name: "Etihad",
    logo: "/companies/etihad.png",
  },
]

export default function CompanyLogos() {
  return (
    <section className="py-12 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="relative">
        <div className="flex animate-scroll">
          {/* First set of logos */}
          <div className="flex items-center justify-between w-full px-4 md:px-8">
            {companies.map((company) => (
              <div
                key={company.name}
                className="relative w-24 h-12 md:w-32 md:h-16 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 mx-8"
              >
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
          {/* Second set of logos for seamless scrolling */}
          <div className="flex items-center justify-between w-full px-4 md:px-8">
            {companies.map((company) => (
              <div
                key={`${company.name}-duplicate-1`}
                className="relative w-24 h-12 md:w-32 md:h-16 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 mx-8"
              >
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
          {/* Third set of logos for smoother infinite scrolling */}
          <div className="flex items-center justify-between w-full px-4 md:px-8">
            {companies.map((company) => (
              <div
                key={`${company.name}-duplicate-2`}
                className="relative w-24 h-12 md:w-32 md:h-16 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 mx-8"
              >
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: 300%;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
} 