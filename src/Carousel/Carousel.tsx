"use client";
import {
  Children,
  cloneElement,
  FC,
  HTMLAttributes,
  isValidElement,
  ReactElement,
  ReactNode,
} from "react";
import { cn } from "../utils/cn";
import { LastLeftIcon } from "../Icons/LastLeftIcon";
import { useCarousel } from "../Hooks/useCarousel";

type CarruselCustomClass = {
  container?: string;
  icons?: string;
  indicators?: string;
};

interface CarouselProps {
  width?: string;
  height: string;
  previousIcon?: ReactElement;
  nextIcon?: ReactElement;
  autoplay?: boolean;
  indicators?: boolean;
  buttons?: boolean;
  time?: number;
  cycleNavigation?: boolean;
  customClass?: CarruselCustomClass;
  onChangeItem?: (index: number) => void;
  onGoToNext?: () => void;
  onGoToPrevious?: () => void;
  className?: string;
  children: ReactNode;
}

export const Carousel: FC<CarouselProps> = ({
  children,
  width = "100%",
  height,
  previousIcon,
  nextIcon,
  autoplay = false,
  indicators = true,
  buttons = false,
  time = 3000,
  cycleNavigation = true,
  className,
  customClass,
  onChangeItem,
  onGoToNext,
  onGoToPrevious,
}) => {
  const {
    currentIndex,
    setCurrentIndex,
    goToNext,
    goToNextCycle,
    goToPrevious,
    goToPreviousCycle,
    onHover,
    setOnHover,
  } = useCarousel({
    children,
    autoplay,
    cycleNavigation,
    onChangeItem,
    onGoToNext,
    onGoToPrevious,
    time,
  });

  return (
    <section className={cn("h-full w-full", customClass?.container)}>
      <article
        className={cn(
          `relative flex items-center justify-between select-none h-full`,
          className
        )}
        style={{ width, height }}
        onMouseEnter={() => {
          setOnHover(true);
        }}
        onMouseLeave={() => {
          if (!buttons) {
            setOnHover(false);
          }
        }}
      >
        {onHover && (
          <div
            className={cn(
              "z-[100] p-1 backdrop-blur-3xl bg-slate-400 rounded-lg cursor-pointer",
              customClass?.icons
            )}
            onClick={cycleNavigation ? goToPreviousCycle : goToPrevious}
          >
            {previousIcon ? (
              previousIcon
            ) : (
              <LastLeftIcon className="w-4 h-4 rotate-180" />
            )}
          </div>
        )}

        {Children.map(children, (child, index) => {
          if (isValidElement(child)) {
            return cloneElement(
              child as ReactElement<HTMLAttributes<ReactNode>>,
              {
                className: cn("absolute w-auto px-12", child.props.className),
                style: {
                  width: width,
                  height: height,
                  zIndex: index === currentIndex ? 10 : 0,
                  opacity: index === currentIndex ? 1 : 0,
                  transition: "opacity 0.5s ease",
                },
              }
            );
          }
          return child;
        })}

        {onHover && (
          <div
            className={cn(
              "z-[100] p-1 backdrop-blur-3xl bg-slate-400 rounded-lg ml-2 cursor-pointer",
              customClass?.icons
            )}
            onClick={cycleNavigation ? goToNextCycle : goToNext}
          >
            {nextIcon ? nextIcon : <LastLeftIcon className="w-4 h-4" />}
          </div>
        )}
      </article>

      {indicators && (
        <div
          className="flex justify-center gap-x-4 mt-2"
          style={{ width: width }}
        >
          {[...Array(Children.count(children))].map((_, i) => {
            return (
              <div
                className={cn(
                  "w-3 h-3 rounded-full",
                  i === currentIndex
                    ? "bg-slate-800"
                    : "bg-slate-500 cursor-pointer",
                  customClass?.indicators
                )}
                key={i}
                onClick={() => {
                  setCurrentIndex(i);
                }}
              ></div>
            );
          })}
        </div>
      )}
    </section>
  );
};
