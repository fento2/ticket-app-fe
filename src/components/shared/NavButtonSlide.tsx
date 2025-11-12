import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "../ui/button"
import React from "react"
import { cn } from "@/lib/utils"
type NavButtonSlideProps = {
    scrollPrev: () => void
    scrollNext: () => void
    selectedIndex?: number
    scrollSnaps?: number,
    className?: string,
    children: React.ReactNode
}
/**
 * 
 * @param selectedIndex for hide button so is you dont wanna hide just ignore
 * @param scrollSnaps for length index scroll
 * @returns 
 */
const NavButtonSlide = ({ scrollNext, scrollPrev, selectedIndex, scrollSnaps = 0, className, children }: NavButtonSlideProps) => {

    const showPrev = selectedIndex !== undefined ? selectedIndex > 0 : true;
    const showNext = selectedIndex !== undefined ? selectedIndex < scrollSnaps - 1 : true;

    return (
        <div className={cn("relative group/navigation w-full", className)}>
            {/***embla content */}
            {children}

            {/* Prev Button */}
            {showPrev && <Button
                onClick={scrollPrev}
                size="icon"
                variant={"outline"}
                className={`absolute -left-5 top-1/2 -translate-y-1/2 opacity-0 group-hover/navigation:opacity-100 transition-opacity duration-300`}
            >
                <ChevronLeft />
            </Button>}

            {/* Next Button */}
            {showNext && <Button
                onClick={scrollNext}
                size="icon"
                variant={'outline'}
                className="absolute -right-5 top-1/2 -translate-y-1/2 opacity-0 group-hover/navigation:opacity-100 transition-opacity duration-300"
            >
                <ChevronRight />
            </Button>
            }
        </div>
    )
}

type PaginationButtonSlideProps = {
    scrollSnaps: number[]
    selectedIndex: number
    scrollTo: (index: number) => void
}

export const PaginationButtonSlide = ({ scrollSnaps, scrollTo, selectedIndex }: PaginationButtonSlideProps) => {
    return (
        <>
            <div className="flex justify-center mt-4 gap-2 absolute bottom-3 left-1/2 -translate-x-1/2">
                {scrollSnaps.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => scrollTo(i)}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 hover:cursor-pointer ${i === selectedIndex ? "bg-primary scale-125" : "bg-secondary scale-50"
                            }`}
                    />
                ))}
            </div>
        </>
    )
}

export default NavButtonSlide 