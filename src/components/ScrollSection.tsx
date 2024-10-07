"use client";

import {
  useEffect,
  useState,
  useRef,
  useCallback,
  Ref,
  HTMLAttributes,
  FC,
} from "react";
import { HTMLMotionProps, motion, MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ScrollCardProps<T = HTMLDivElement> extends HTMLAttributes<T> {
  isFirst: boolean;
  isLast: boolean;
  isReversed: boolean;

  step: number;
  isActivated: boolean;

  stepRef: Ref<HTMLSpanElement>;
  imageSrc?: string;
  imageAlt?: string;
}

export interface ScrollCardItem<T = HTMLDivElement> extends HTMLAttributes<T> {
  imageSrc?: string;
  imageAlt?: string;
  step: number;
}

interface Props extends HTMLMotionProps<"span"> {
  Card: FC<ScrollCardProps>;
  items: ScrollCardItem[];
}

const ScrollSection: React.FC<Props> = ({ Card, items, ...props }) => {
  const [fillHeight, setFillHeight] = useState<number>(0);
  const [currentStep, setCurrentStep] = useState<number>(0);
  const container = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLSpanElement[]>([]);

  const addToStepsRef = useCallback(
    (index: number, el: HTMLSpanElement | null) => {
      if (el && !stepsRef.current.includes(el)) {
        stepsRef.current[index] = el;
      }
    },
    [stepsRef]
  );

  useEffect(() => {
    const handleScroll = () => {
      if (container.current == null) return;

      const scrollY = window.scrollY;
      const isScrollEnded =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;
      const elementHeight = container.current.offsetHeight;
      const elementTop = container.current.offsetTop;

      const scrollStart = elementTop - elementHeight / 2;
      const scrolled = (scrollY - scrollStart) / elementHeight;

      let newCurrentStep = 0;

      stepsRef.current.forEach((step, index) => {
        if (!step) return;

        const stepRect = step.getBoundingClientRect();
        const eleScrolled = stepRect.top - elementHeight / 2;

        if (eleScrolled <= 0) {
          newCurrentStep = index + 1;
        }
      });

      setCurrentStep(newCurrentStep);

      if (scrolled <= 0) setFillHeight(0);
      else if (scrolled >= 1 || isScrollEnded) setFillHeight(elementHeight);
      else setFillHeight(scrolled * elementHeight);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [container, stepsRef]);

  return (
    <div className="relative w-full my-16" ref={container}>
      <motion.span
        {...props}
        className={cn(
          "absolute left-1/2 rounded-full bg-blue-500 -translate-x-1/2 w-2 transition-all duration-0",
          props.className
        )}
        style={{
          height: `${fillHeight}px`,
          ...props.style,
        }}
      />
      <ul className="relative w-full flex flex-col gap-12 items-center">
        {items.map((item, i) => {
          const isFirst = i == 0;
          const isLast = i == items.length - 1;
          const step = i + 1;

          return (
            <Card
              {...item}
              isFirst={isFirst}
              isLast={isLast}
              key={step}
              step={step}
              isReversed={i % 2 == 1}
              isActivated={
                fillHeight == container.current?.offsetHeight ||
                currentStep >= step
              }
              stepRef={(element) => addToStepsRef(i, element)}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ScrollSection;
