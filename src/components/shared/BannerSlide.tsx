"use client"
import NavButtonSlide, { PaginationButtonSlide } from "./NavButtonSlide"
import { useControllSlide } from "@/features/event/slide/useControllSlide"
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";


const BannerSlide = () => {
    const { emblaApi, emblaRef, scrollNext, scrollPrev, scrollSnaps, selectedIndex } = useControllSlide({ loop: true }, [
        Autoplay({
            delay: 5000,
            stopOnInteraction: false,
            stopOnMouseEnter: true,
        }),
    ])

    return (
        <NavButtonSlide
            scrollNext={scrollNext}
            scrollPrev={scrollPrev}
        >

            <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
                <div className="flex">
                    <div className="flex-[0_0_100%] h-80 relative hover:scale-105 transition-transform">
                        <Image
                            src="https://images.pexels.com/photos/30455566/pexels-photo-30455566.jpeg"
                            alt="Slide 1"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex-[0_0_100%] h-80 relative hover:scale-105 transition-transform">
                        <Image
                            src="https://images.pexels.com/photos/30488841/pexels-photo-30488841.jpeg"
                            alt="Slide 2"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex-[0_0_100%] h-80 relative hover:scale-105 transition-transform">
                        <Image
                            src="https://images.pexels.com/photos/30251830/pexels-photo-30251830.jpeg"
                            alt="Slide 3"
                            fill
                            className="object-cover"
                        />
                    </div>

                </div>
            </div>

            <PaginationButtonSlide
                scrollSnaps={scrollSnaps}
                scrollTo={(i) => emblaApi?.scrollTo(i)}
                selectedIndex={selectedIndex}
            />

        </NavButtonSlide>

    )
}

export default BannerSlide