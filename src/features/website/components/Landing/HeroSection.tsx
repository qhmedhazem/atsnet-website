"use client";
import { Carousel } from "@material-tailwind/react";
import { CarouselItem } from "./hero/CarouselItem";
import { HeroCursor } from "./hero/HeroCursor";

const HeroSection = () => {
  return (
    <section
      id="atsnet"
      className="relative w-screen h-screen max-h-screen z-0"
    >
      <Carousel
        id="pageLayout"
        className="w-full h-full max-h-screen"
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
      <HeroCursor />
    </section>
  );
};

export default HeroSection;
