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
        title={
          <>
            Welcome to <br />
            The First and Only
          </>
        }
        description="Nuclear Energy Shcool in African and Middle-East."
        imageSrc="/landing2.jpg"
        imageAlt="1234"
      />
      <CarouselItem
        title="The Egyptian ambitious nuclear energy program"
        description="Excellence in Advanced Nuclear Education"
        imageSrc="/landing4.jpg"
        imageAlt="1234"
      />
      <CarouselItem
        title={
          <>
            Shaping the Future <br />
            of Nuclear Energy
          </>
        }
        description="in Elite Technological Engineering Education"
        imageSrc="/landing6.jpg"
        imageAlt="1234"
      />
    </Carousel>
  );
};

export default HeroSection;
//title="Welcome to El-Dabaa Nuclear School"
//description="Pioneering the Future of Nuclear Energy in Egypt."

//Leading the Way
