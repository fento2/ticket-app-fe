"use client";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import slugify from "slugify";

interface SwipeEventProps {
  title: string;
}

const SwipeEvent = (props: SwipeEventProps) => {
  const navigation = slugify(props.title, { lower: true, strict: true });

  useEffect(() => {
    const nextBtn = document.querySelector(`.swipe-slider-next-${navigation}`);
    const prevBtn = document.querySelector(`.swipe-slider-prev-${navigation}`);

    if (nextBtn && prevBtn) {
      nextBtn.setAttribute("tabindex", "0");
      prevBtn.setAttribute("tabindex", "0");
    }
  }, [navigation]);

  return (
    <div className="w-full relative group">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={1}
        slidesPerView={1}
        pagination={{ clickable: true, dynamicBullets: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        navigation={{
          nextEl: `.swipe-slider-next-${navigation}`,
          prevEl: `.swipe-slider-prev-${navigation}`,
        }}
        className="rounded-2xl"
      >
        <SwiperSlide>
          <div className="h-72 bg-red-400 flex items-center justify-center text-white text-2xl">
            Slide 1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-72 bg-blue-400 flex items-center justify-center text-white text-2xl">
            Slide 2
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-72 bg-green-400 flex items-center justify-center text-white text-2xl">
            Slide 3
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Prev Button */}
      <Button
        variant="outline"
        size="icon"
        className={`swipe-slider-prev-${navigation} absolute top-1/2 -left-0 -translate-y-1/2 translate-x-0 z-20 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:-translate-x-6 transition-all duration-300`}
      >
        <ChevronLeft className="w-5 h-5 text-gray-800" />
      </Button>

      {/* Next Button */}
      <Button
        variant="outline"
        size="icon"
        className={`swipe-slider-next-${navigation} absolute top-1/2 right-0 -translate-y-1/2 translate-x-0 z-20 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 opacity-0 group-hover:opacity-100 group-hover:translate-x-6 transition-all duration-300`}
      >
        <ChevronRight className="w-5 h-5 text-gray-800" />
      </Button>
    </div>
  );
};

export default SwipeEvent;
