import {
  useScroll as useMotionScroll,
  useMotionValueEvent,
} from "framer-motion";
import { useState } from "react";

const useScroll = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useMotionScroll();

  useMotionValueEvent(scrollY, "change", (value) => {
    if (value > 10 && !isScrolled) {
      setIsScrolled(true);
    } else if (value < 10 && isScrolled) {
      setIsScrolled(false);
    }
  });

  return isScrolled;
};

export default useScroll;
