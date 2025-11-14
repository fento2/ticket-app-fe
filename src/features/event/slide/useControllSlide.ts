"use client";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaOptionsType, EmblaPluginType } from "embla-carousel";
import { useCallback, useEffect, useState } from "react";

const useControllSlide = (
  props?: EmblaOptionsType,
  plugins?: EmblaPluginType[]
) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [emblaRef, emblaApi] = useEmblaCarousel({ ...props }, plugins);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;

    if (props?.loop) return emblaApi.scrollPrev();

    if (selectedIndex === 0) {
      emblaApi.scrollTo(scrollSnaps.length - 1);
    } else {
      emblaApi.scrollPrev();
    }
  }, [emblaApi, selectedIndex, scrollSnaps, props]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    const lastIndex = scrollSnaps.length - 1;

    if (props?.loop) return emblaApi.scrollNext();

    if (selectedIndex === lastIndex) {
      emblaApi.scrollTo(0);
    } else {
      emblaApi.scrollNext();
    }
  }, [emblaApi, selectedIndex, scrollSnaps, props]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    emblaRef,
    emblaApi,
    scrollNext,
    scrollPrev,
  };
};

export { useControllSlide };
