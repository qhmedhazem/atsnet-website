"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const ScrollStepIndicator: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollHeight, setScrollHeight] = useState(0);
  const [lastStepHeight, setLastStepHeight] = useState(0);
  const [activeSteps, setActiveSteps] = useState<number[]>([]);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  const steps = [1, 2, 3];

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.body.scrollHeight;

      // Calculate total scrollable height
      const totalScrollableHeight = docHeight - windowHeight;

      // Calculate new scroll height percentage
      const newScrollHeight = (scrollY / totalScrollableHeight) * 100;
      setScrollHeight(newScrollHeight);

      // Determine active steps based on scroll position
      const newActiveSteps: number[] = [];

      sectionsRef.current.forEach((section, index) => {
        if (newScrollHeight >= index * (100 / steps.length)) {
          newActiveSteps.push(index);
          setLastStepHeight(index * (100 / steps.length));
        } else {
          setLastStepHeight(0);
        }
      });

      // Deactivate the first step when at the top of the page
      if (scrollY === 0) {
        setActiveSteps([]);
      } else {
        setActiveSteps(newActiveSteps);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen flex flex-col items-center overflow-hidden mt-36"
    >
      <motion.div
        className="absolute left-1/2 rounded-full bg-blue-500"
        style={{
          width: "8px",
          height: `${
            lastStepHeight === 0 ? Math.min(scrollHeight) : lastStepHeight + 1
          }vh`, // Limit to last step height
          transform: "translateX(-50%)",
          transition: "height 0s", // No transition delay for height
        }}
      />
      {steps.map((step, index) => (
        <div
          key={step}
          ref={addToRefs}
          className="h-screen w-full flex justify-between relative"
        >
          <img
            className="w-[350px] h-[200px]"
            src="/landing2.jpg"
            alt={`Step ${step}`}
          />
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xl transition-colors duration-300 ${
              activeSteps.includes(index) ? "bg-blue-500" : "bg-gray-500"
            }`}
          >
            {step}
          </div>
          <p className="text-sm w-[350px]">
            El-Dabaa Nuclear School is a premier institution dedicated to
            educating and training the next generation of nuclear engineers and
            scientists. We are proud to be a key component of Egypt's ambitious
          </p>
        </div>
      ))}
      <div></div>
    </div>
  );
};

export default ScrollStepIndicator;
