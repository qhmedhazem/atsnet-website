"use client";
import { Carousel } from "@material-tailwind/react";
import { CarouselItem } from "./hero/CarouselItem";
import { HeroCursor } from "./hero/HeroCursor";
import { LinkButton } from "@/components/ui/Button";

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
          title="Explore Advanced Nuclear Technology Education"
          description="The next generation of energy professionals."
          imageSrc="/landing2.jpg"
          imageAlt="1234"
        >
          <LinkButton
            size="lg"
            href="/about"
            className="transition-all bg-light-blue-800 hover:bg-light-blue-900"
          >
            Learn More
          </LinkButton>
        </CarouselItem>
        <CarouselItem
          title="Innovative Engineering Projects"
          description="Creative solutions and technical advancements demonstrated by students and researchers."
          imageSrc="/landing4.jpg"
          imageAlt="Innovative Engineering Projects"
        >
          <LinkButton
            size="lg"
            href="/academics"
            className="transition-all bg-light-blue-800 hover:bg-light-blue-900"
          >
            Academics
          </LinkButton>
        </CarouselItem>
        <CarouselItem
          title="Where Talent Meets Opportunity"
          description="A transparent and fair process to identify talented individuals for our programs."
          imageSrc="/landing6.jpg"
          imageAlt="A transparent and fair process to identify talented individuals for our programs."
        >
          <LinkButton
            size="lg"
            href="/admission"
            className="transition-all bg-light-blue-800 hover:bg-light-blue-900"
          >
            Admission
          </LinkButton>
        </CarouselItem>
      </Carousel>
      <HeroCursor />
    </section>
  );
};

export default HeroSection;
