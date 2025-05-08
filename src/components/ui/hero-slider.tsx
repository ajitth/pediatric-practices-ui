"use client";

import { useEffect, useState } from "react"

interface HeroSliderProps {
  interval?: number
  className?: string
}

export default function HeroSlider({ interval = 5000, className = "" }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const HERO_IMAGES = [
    "/assets/pediatric-1.jpg",
    "/assets/pediatric-2.jpg",
    "/assets/pediatric-3.jpg",
  ]
  useEffect(() => {
    // Set up the interval to change slides
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length)
    }, interval)

    // Clean up the interval on component unmount
    return () => clearInterval(slideInterval)
  }, [interval])

  return (
    <div className={`absolute inset-0 z-0 overflow-hidden ${className}`}>
      {HERO_IMAGES.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
    </div>
  )
}
