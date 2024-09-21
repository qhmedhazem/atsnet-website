"use client";
import { Carousel } from "@material-tailwind/react";
import { CarouselItem } from "./CarouselItem";

const HeroSection = () => {
  return (
    <Carousel
      id="pageLayout"
      className="w-screen h-screen max-h-screen z-0"
      prevArrow={() => null}
      nextArrow={() => null}
      autoplay={true}
      loop={true}
      autoplayDelay={10_000}
    >
      <CarouselItem
        title="1234"
        description="1234"
        imageSrc="/landing2.jpg"
        imageAlt="1234"
      />
      <CarouselItem
        title="1234"
        description="1234"
        imageSrc="/landing4.jpg"
        imageAlt="1234"
      />
      <CarouselItem
        title="1234"
        description="1234"
        imageSrc="/landing1.jpg"
        imageAlt="1234"
      />
    </Carousel>
  );
};

export default HeroSection;
