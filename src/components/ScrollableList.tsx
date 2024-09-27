"use client";
import {
  FC,
  HTMLAttributes,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode[];
}

interface State {
  isRequireButtons: boolean;
  isOnStart: boolean;
  isOnEnd: boolean;
}

const ScrollableList: FC<Props> = ({ children, ...props }) => {
  const [state, setState] = useState<State>({
    isOnEnd: false,
    isOnStart: true,
    isRequireButtons: true,
  });

  const scrollContainer = useRef<HTMLUListElement | null>(null);

  function handleOnScroll(e: any) {
    const isOnEnd =
      e.target.scrollWidth - e.target.scrollLeft <= e.target.offsetWidth;
    const isOnStart = e.target.scrollLeft < 10;
    const isRequireButtons = e.target.offsetWidth < e.target.scrollWidth;

    setState({
      isOnEnd,
      isOnStart,
      isRequireButtons,
    });
  }

  useEffect(() => {
    const offsetWidth = scrollContainer.current?.offsetWidth;
    const scrollWidth = scrollContainer.current?.scrollWidth;

    if (offsetWidth && scrollWidth) {
      const isRequireButtons = offsetWidth < scrollWidth;
      setState((state) => ({
        ...state,
        isRequireButtons,
      }));
    }
  }, [scrollContainer.current, scrollContainer.current]);

  function handleOnScrollButtonClick(direction: string) {
    const offsetWidth = scrollContainer.current?.offsetWidth;
    const scrollLeft = scrollContainer.current?.scrollLeft;

    if (direction === "right" && scrollLeft !== undefined && offsetWidth) {
      scrollContainer.current?.scroll({
        top: 0,
        left: scrollLeft + offsetWidth,
        behavior: "smooth",
      });
    } else if (direction === "left" && scrollLeft && offsetWidth) {
      scrollContainer.current?.scroll({
        top: 0,
        left: scrollLeft - offsetWidth,
        behavior: "smooth",
      });
    }
  }

  return (
    <div className="relative">
      <ul
        className="flex gap-4 flex-row overflow-x-scroll lg:overflow-hidden"
        onScroll={handleOnScroll}
        ref={scrollContainer}
      >
        {children}
      </ul>

      {state.isRequireButtons && (
        <div className="hidden lg:block">
          {/* Scroll Right Button */}
          <Button
            variant="ghost"
            className={cn(
              "absolute top-1/2 right-2 transform -translate-y-1/2 h-12 w-12 p-0 text-primary flex justify-center items-center bg-white rounded-full hover:bg-accent",
              state.isOnEnd ? "hidden" : "flex"
            )}
            onClick={handleOnScrollButtonClick.bind(null, "right")}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-8 h-8" />
          </Button>

          {/* Scroll Left Button */}

          <Button
            variant="ghost"
            className={cn(
              "absolute top-1/2 left-2 transform -translate-y-1/2 h-12 w-12 p-0 text-primary flex justify-center items-center bg-white rounded-full hover:bg-accent",
              state.isOnStart ? "hidden" : "flex"
            )}
            onClick={handleOnScrollButtonClick.bind(null, "left")}
            aria-label="Scroll Left"
          >
            <ChevronLeft className="w-8 h-8" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default ScrollableList;
