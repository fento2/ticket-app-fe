'use client'
import { useControllSlide } from "@/features/event/slide/useControllSlide";
import { Card, CardHeader } from "../ui/card";

const categoryList = [
  {
    banner:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    name: "Music",
  },
  {
    banner:
      "https://images.pexels.com/photos/164879/pexels-photo-164879.jpeg",
    name: "Sport",
  },
  {
    banner:
      "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg",
    name: "Art",
  },
  {
    banner:
      "https://images.pexels.com/photos/8856048/pexels-photo-8856048.jpeg",
    name: "Food",
  },
  {
    banner:
      "https://images.pexels.com/photos/167964/pexels-photo-167964.jpeg",
    name: "Travel",
  },
  {
    banner:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    name: "Music",
  },
  {
    banner:
      "https://images.pexels.com/photos/164879/pexels-photo-164879.jpeg",
    name: "Sport",
  },
  {
    banner:
      "https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg",
    name: "Art",
  },
  {
    banner:
      "https://images.pexels.com/photos/8856048/pexels-photo-8856048.jpeg",
    name: "Food",
  },
  {
    banner:
      "https://images.pexels.com/photos/167964/pexels-photo-167964.jpeg",
    name: "Travel",
  },
];

const Category = () => {
  const { emblaRef } = useControllSlide({
    align: "start",
    dragFree: true,
  });

  return (
    <div>
      <Card className="relative group w-full shadow-none">
        <CardHeader className="text-xl font-bold tracking-wider">Category Event</CardHeader>

        {/* embla wrapper */}
        <div className="overflow-hidden embla" ref={emblaRef}>
          {/* embla container */}
          <div className="flex embla__container gap-4 px-4 mr-4">
            {categoryList.map((value, index) => (
              <div
                key={index}
                className="embla__slide flex-[0_0_auto] w-[8rem] h-32 rounded-lg overflow-hidden shadow-md cursor-pointer"
              >
                <div
                  className="w-full h-full bg-cover bg-center relative flex items-center justify-center hover:scale-105 transition-transform"
                  style={{
                    backgroundImage: `url(${value.banner})`,
                  }}
                >
                  <div className="absolute inset-0 hover:bg-black/50 hover:scale-125 transition-all">
                    <p className="flex justify-center text-center m-12 text-white font-semibold text-lg">
                      {value.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};
export default Category;
