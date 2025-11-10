"use client"
import NavButtonSlide, { PaginationButtonSlide } from "./NavButtonSlide"
import { useControllSlide } from "@/features/event/slide/useControllSlide"
import Autoplay from "embla-carousel-autoplay";


const BannerSlide = () => {
    const { emblaApi, emblaRef, scrollNext, scrollPrev, scrollSnaps, selectedIndex } = useControllSlide({ loop: true }, [
        Autoplay({
            delay: 4000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
        }),
    ])

    return (
        <div className="relative group w-full">

            <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
                <div className="flex">
                    <div className="flex-[0_0_100%] bg-red-500 h-72 flex items-center justify-center text-white text-2xl">Slide 1</div>
                    <div className="flex-[0_0_100%] bg-blue-500 h-72 flex items-center justify-center text-white text-2xl">Slide 2</div>
                    <div className="flex-[0_0_100%] bg-green-500 h-72 flex items-center justify-center text-white text-2xl">Slide 3</div>
                </div>
            </div>

            <PaginationButtonSlide
                scrollSnaps={scrollSnaps}
                scrollTo={(i) => emblaApi?.scrollTo(i)}
                selectedIndex={selectedIndex}
            />

            <NavButtonSlide
                scrollNext={scrollNext}
                scrollPrev={scrollPrev}
            />
        </div>
    )
}

export default BannerSlide