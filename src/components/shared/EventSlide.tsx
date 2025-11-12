"use client"
import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import NavButtonSlide from "./NavButtonSlide"
import { useControllSlide } from "@/features/event/slide/useControllSlide"
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Separator } from "../ui/separator";

const events = [
    {
        title: "Cinta Kala Senja - Barasuara",
        image: "https://images.pexels.com/photos/4022332/pexels-photo-4022332.jpeg",
        startPrice: 200000,
        date: "25 Sep 2025",
        organizer: "Bengkel Space",
        organizerImage: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        title: "Tech Conference",
        image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
        startPrice: 150000,
        date: "30 Sep 2025",
        organizer: "Tech Hub",
        organizerImage: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        title: "Art Exhibition",
        image: "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg",
        startPrice: 100000,
        date: "2 Oct 2025",
        organizer: "Art Center",
        organizerImage: "https://randomuser.me/api/portraits/men/56.jpg",
    },
    {
        title: "Startup Meetup",
        image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
        startPrice: 120000,
        date: "5 Oct 2025",
        organizer: "Startup Hub",
        organizerImage: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
        title: "Festival Musik Indie",
        image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg",
        startPrice: 180000,
        date: "8 Oct 2025",
        organizer: "Indie Fest",
        organizerImage: "https://randomuser.me/api/portraits/men/23.jpg",
    },
    {
        title: "UI/UX Workshop",
        image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg",
        startPrice: 100000,
        date: "10 Oct 2025",
        organizer: "Design Hub",
        organizerImage: "https://randomuser.me/api/portraits/women/40.jpg",
    },
    {
        title: "Cinta Kala Senja - Barasuara",
        image: "https://images.pexels.com/photos/4022332/pexels-photo-4022332.jpeg",
        startPrice: 200000,
        date: "25 Sep 2025",
        organizer: "Bengkel Space",
        organizerImage: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        title: "Tech Conference",
        image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
        startPrice: 150000,
        date: "30 Sep 2025",
        organizer: "Tech Hub",
        organizerImage: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
        title: "Art Exhibition",
        image: "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg",
        startPrice: 100000,
        date: "2 Oct 2025",
        organizer: "Art Center",
        organizerImage: "https://randomuser.me/api/portraits/men/56.jpg",
    },
    {
        title: "Startup Meetup",
        image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
        startPrice: 120000,
        date: "5 Oct 2025",
        organizer: "Startup Hub",
        organizerImage: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
        title: "Festival Musik Indie",
        image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg",
        startPrice: 180000,
        date: "8 Oct 2025",
        organizer: "Indie Fest",
        organizerImage: "https://randomuser.me/api/portraits/men/23.jpg",
    },
    {
        title: "UI/UX Workshop",
        image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg",
        startPrice: 100000,
        date: "10 Oct 2025",
        organizer: "Design Hub",
        organizerImage: "https://randomuser.me/api/portraits/women/40.jpg",
    },

];

type EventSlideProps = {
    title: string
}

const EventSlide = ({ title }: EventSlideProps) => {
    const { emblaRef, scrollNext, scrollPrev, selectedIndex, scrollSnaps } = useControllSlide({
        align: 'start',
        slidesToScroll: 'auto',
    });

    return (
        <NavButtonSlide
            scrollNext={scrollNext}
            scrollPrev={scrollPrev}
            className="space-y-4"
        >

            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-wide relative inline-block">
                    {title}
                    <div className="absolute -bottom-1 left-0 w-full h-1 bg-primary rounded"></div>
                </h2>

                {/* Action Button */}
                <Button
                    variant={'ghost'}
                    className="font-medium"
                >
                    Lihat Semua
                </Button>
            </div>

            {/* Carousel Container */}
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex gap-4">
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className="flex-[0_0_auto] shrink-0 w-64 group "
                        >
                            <Card className={`hover:cursor-pointer overflow-hidden shadow-none transition-shadow border-none p-0 hover:bg-accent`}>
                                {/* Banner */}
                                <CardContent className="p-0">
                                    <div className={`relative w-full h-40 overflow-hidden`}>
                                        <Image
                                            src={event.image}
                                            alt={event.title}
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="space-y-2 py-2 px-3">
                                        <div>
                                            <Tooltip delayDuration={1000}>
                                                <TooltipTrigger asChild>
                                                    <h3 className="font-semibold text-md truncate">
                                                        {event.title}
                                                    </h3>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    {event.title}
                                                </TooltipContent>
                                            </Tooltip>
                                            <p className="text-sm text-gray-500 mt-1">{event.date}</p>
                                            <p className="text-sm font-semibold mt-1 text-primary">
                                                Rp{event.startPrice.toLocaleString("id-ID")}
                                            </p>
                                        </div>
                                        <Separator />
                                        <div className="flex items-center gap-2">
                                            <div className="relative w-6 h-6 rounded-full overflow-hidden">
                                                <Image
                                                    src={event.organizerImage}
                                                    alt={event.organizer}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                            <span className="text-sm text-gray-500 truncate">
                                                {event.organizer}
                                            </span>
                                        </div>
                                    </div>
                                </CardContent>

                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </NavButtonSlide>
    );
};

export default EventSlide;
