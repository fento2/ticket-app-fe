"use client";
import Image from "next/image";

const TopEvent = () => {
  const top3 = [
    {
      top: 1,
      banner:
        "https://images.pexels.com/photos/4022332/pexels-photo-4022332.jpeg",
      title: "Music Festival",
    },
    {
      top: 2,
      banner:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      title: "Startup Meetup",
    },
    {
      top: 3,
      banner:
        "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg",
      title: "Tech Conference",
    },
  ];

  return (
    <div className="bg-sidebar-primary py-8">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-3xl font-bold text-white mb-6 tracking-wide">
          Top Event
        </h2>

        <div className="flex gap-8 overflow-x-auto scrollbar-hide">
          {top3.map((event) => (
            <div
              key={event.top}
              className="flex items-center gap-4 min-w-[350px]"
            >
              <p className="text-6xl md:text-7xl font-extrabold text-white opacity-80">
                {event.top}
              </p>

              <div className="flex-1 relative h-44 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={event.banner}
                  alt={`Event ${event.top}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black/50 p-2">
                  <p className="text-white font-semibold">{event.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopEvent;
