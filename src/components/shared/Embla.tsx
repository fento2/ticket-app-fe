"use client"
import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useState } from "react"

const Embla = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        setScrollSnaps(emblaApi.scrollSnapList())
        emblaApi.on("select", onSelect)
        onSelect() // set index awal
    }, [emblaApi, onSelect])

    return (
        <div className="w-full">
            {/* Carousel Container */}
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    <div className="flex-[0_0_100%] bg-red-500 h-60 flex items-center justify-center text-white text-2xl">
                        Slide 1
                    </div>
                    <div className="flex-[0_0_100%] bg-blue-500 h-60 flex items-center justify-center text-white text-2xl">
                        Slide 2
                    </div>
                    <div className="flex-[0_0_100%] bg-green-500 h-60 flex items-center justify-center text-white text-2xl">
                        Slide 3
                    </div>
                </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-4 gap-2">
                {scrollSnaps.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => emblaApi && emblaApi.scrollTo(index)}
                        className={`w-3 h-3 rounded-full ${index === selectedIndex ? "bg-blue-500" : "bg-gray-400"
                            }`}
                    />
                ))}
            </div>
        </div>
    )
}

export default Embla