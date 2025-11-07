import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "../ui/button"
type NavButtonSlideProps = {
    scrollPrev: () => void
    scrollNext: () => void
}
const NavButtonSlide = ({ scrollNext, scrollPrev }: NavButtonSlideProps) => {
    return (
        <>
            {/* Prev Button */}
            <Button
                onClick={scrollPrev}
                size="icon"
                variant={'outline'}
                className={`absolute -left-5 top-1/2 -translate-y-1/2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            >
                <ChevronLeft />
            </Button>

            {/* Next Button */}
            <Button
                onClick={scrollNext}
                size="icon"
                variant="outline"
                className="absolute -right-5 top-1/2 -translate-y-1/2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
                <ChevronRight />
            </Button>
        </>
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