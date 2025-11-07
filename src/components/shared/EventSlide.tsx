"use client"
import Image from "next/image";
import { Card, CardContent, CardFooter } from "../ui/card";
import NavButtonSlide from "./NavButtonSlide"
import { useControllSlide } from "@/features/event/slide/useControllSlide"
import { Button } from "../ui/button";

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
        title: "Art Exhibition1",
        image: "https://images.pexels.com/photos/210186/pexels-photo-310128.jpeg",
        startPrice: 100000,
        date: "2 Oct 2025",
        organizer: "Art Center",
        organizerImage: "https://randomuser.me/api/portraits/men/56.jpg",
    },
    {
        title: "Startup Meetup3",
        image: "https://images.pexels.com/photos/3184291/pexels-photo-312491.jpeg",
        startPrice: 120000,
        date: "5 Oct 2025",
        organizer: "Startup Hub",
        organizerImage: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
        title: "Festival Musik Indie2",
        image: "https://images.pexels.com/photos/1649771/pexels-photo-1249771.jpeg",
        startPrice: 180000,
        date: "8 Oct 2025",
        organizer: "Indie Fest",
        organizerImage: "https://randomuser.me/api/portraits/men/23.jpg",
    },
    {
        title: "UI/UX Workshop4",
        image: "https://images.pexels.com/photos/3184357/pexels-photo-328357.jpeg",
        startPrice: 100000,
        date: "10 Oct 2025",
        organizer: "Design Hub",
        organizerImage: "https://randomuser.me/api/portraits/women/30.jpg",
    },
];

type EventSlideProps = {
    title: string
}

const EventSlide = ({ title }: EventSlideProps) => {
    const { emblaRef, scrollNext, scrollPrev } = useControllSlide({
        align: 'start',
        slidesToScroll: 'auto',
        dragFree: true,
    });

    return (
        <div className="relative group w-full space-y-4">

            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold tracking-wide relative inline-block text-primary">
                    {title}
                    <div className="absolute -bottom-1 left-0 w-full h-1 bg-primary rounded"></div>
                </h2>

                {/* Action Button */}
                <Button
                    variant={'link'}
                    className="font-medium"
                >
                    Lihat Semua
                </Button>
            </div>

            {/* Carousel Container */}
            <div className="overflow-hidden rounded-2xl embla" ref={emblaRef}>
                <div className="embla__container flex gap-6">
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className="embla__slide flex-[0_0_75%] md:flex-[0_0_35%] lg:flex-[0_0_20%] min-w-2"
                        >
                            <Card className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all">
                                {/* Banner */}
                                <div className="relative w-full h-48 -my-6">
                                    <Image
                                        src={event.image}
                                        alt={event.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Konten */}
                                <CardContent className="p-4">
                                    <h3 className="font-semibold text-lg truncate">
                                        {event.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 mt-1">{event.date}</p>
                                    <p className="text-sm font-semibold mt-1 text-emerald-700">
                                        Rp{event.startPrice.toLocaleString("id-ID")}
                                    </p>
                                </CardContent>

                                {/* Footer Organizer */}
                                <CardFooter className="px-4 py-2 border-t border-gray-200 flex items-center gap-2">
                                    <div className="relative w-6 h-6 rounded-full overflow-hidden">
                                        <Image
                                            src={event.organizerImage}
                                            alt={event.organizer}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <span className="text-sm text-gray-500">
                                        {event.organizer}
                                    </span>
                                </CardFooter>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>

            <NavButtonSlide scrollNext={scrollNext} scrollPrev={scrollPrev} />
        </div>
    );
};

export default EventSlide;
