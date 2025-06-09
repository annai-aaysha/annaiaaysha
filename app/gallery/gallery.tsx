"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import Lightbox from "yet-another-react-lightbox"
import Video from "yet-another-react-lightbox/plugins/video"
import "yet-another-react-lightbox/styles.css"

type GalleryItem = {
  id: number
  type: "image" | "video"
  src: string
  alt: string
  poster?: string
}

// Custom hook for video poster generation
function useVideoPoster(videoSrc: string) {
  const [poster, setPoster] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const captureFrame = () => {
        video.currentTime = 0;
        const canvas = document.createElement('canvas');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
          const posterUrl = canvas.toDataURL('image/jpeg', 0.8);
          setPoster(posterUrl);
        }
      };

      video.addEventListener('loadeddata', captureFrame);
      return () => video.removeEventListener('loadeddata', captureFrame);
    }
  }, [videoSrc]);

  return { poster, videoRef };
}

export default function Gallery() {
  const [index, setIndex] = useState(-1);
  
  // Generate posters for all videos
  const video1Poster = useVideoPoster("/speech.mp4");
  const video2Poster = useVideoPoster("/hazarath_bus.mp4");

  const galleryItems: GalleryItem[] = [
    { id: 1, type: "image", src: "/gallery1.jpg", alt: "Hajis inside Burj-ar-Rayyan" },
    { id: 2, type: "image", src: "/gallery2.jpg", alt: "Safa Marwa" },
    { id: 3, type: "image", src: "/gallery3.jpg", alt: "Brochure" },
    { id: 4, type: "image", src: "/gallery11.jpg", alt: "Food" },
    { id: 5, type: "image", src: "/ayp.jpg", alt: "AYP Image" },
    { id: 6, type: "image", src: "/food.jpg", alt: "Food Image" },
    { id: 7, type: "image", src: "/room.jpg", alt: "Room Image" },
    { id: 8, type: "image", src: "/Slm_fam.jpg", alt: "Family Image" },
    { id: 9, type: "image", src: "/gallery4.jpg", alt: "Family Image" },
    { id: 10, type: "image", src: "/gallery5.jpg", alt: "Family Image" },
    { id: 11, type: "image", src: "/gallery6.jpg", alt: "Family Image" },
    { id: 12, type: "image", src: "/gallery7.jpg", alt: "Family Image" },
    { id: 13, type: "image", src: "/gallery8.jpg", alt: "Family Image" },
    { id: 14, type: "image", src: "/gallery9.jpg", alt: "Family Image" },
    { id: 15, type: "image", src: "/gallery10.jpg", alt: "Family Image" },
    { 
      id: 16, 
      type: "video", 
      src: "/speech.mp4", 
      alt: "Speech Video",
      poster: video1Poster.poster || "/gallery1.jpg"
    },
    { 
      id: 17, 
      type: "video", 
      src: "/hazarath_bus.mp4", 
      alt: "Hazarath Bus Video",
      poster: video2Poster.poster || "/gallery1.jpg"
    },
  ]

  return (
    <>
      {/* Hidden video elements for poster generation */}
      <video 
        ref={video1Poster.videoRef}
        src="/speech.mp4"
        className="hidden"
        preload="auto"
        muted
      />
      <video 
        ref={video2Poster.videoRef}
        src="/hazarath_bus.mp4"
        className="hidden"
        preload="auto"
        muted
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {galleryItems.map((item, idx) => (
          <div 
            key={item.id} 
            className="overflow-hidden rounded-lg shadow-md transition-transform hover:scale-[1.02] cursor-pointer"
            onClick={() => setIndex(idx)}
          >
            {item.type === "video" ? (
              <div className="relative w-full h-64 bg-black">
                <Image
                  src={item.poster || "/gallery1.jpg"}
                  alt={item.alt}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-40 transition-all">
                  <svg 
                    className="w-16 h-16 text-white opacity-75 hover:opacity-100 transition-opacity" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
            ) : (
              <Image
                src={item.src}
                alt={item.alt}
                width={600}
                height={400}
                className="object-cover w-full h-64"
              />
            )}
          </div>
        ))}
      </div>

      <Lightbox
        slides={galleryItems.map(item => item.type === "video" 
          ? { 
              type: "video", 
              sources: [{ src: item.src, type: "video/mp4" }],
              poster: item.poster
            }
          : { type: "image", src: item.src, alt: item.alt }
        )}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        carousel={{
          padding: "16px",
          spacing: "16px",
        }}
        plugins={[Video]}
      />
    </>
  )
} 