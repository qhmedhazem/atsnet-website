"use client";
import { AnimatePresence, motion } from "framer-motion";
import LandingSection from "./LandingSection";

const HeroSection = () => {
  return (
    <LandingSection className="max-w-2xl text-center px-0">
      <AnimatePresence></AnimatePresence>
    </LandingSection>
  );
};

export default HeroSection;
