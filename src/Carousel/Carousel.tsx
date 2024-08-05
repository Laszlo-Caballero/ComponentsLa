/* eslint-disable react-hooks/exhaustive-deps */
import {
  Children,
  cloneElement,
  FC,
  HTMLAttributes,
  isValidElement,
  ReactElement,
  useEffect,
  useState,
} from "react";
import { cn } from "../utils/cn";
import { PreviousIcon } from "../Icons/PreviousIcon";
import { NextIcon } from "../Icons/NextIcon";

interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
  heigth: string;
  previousIcon?: ReactElement;
  nextIcon?: ReactElement;
  autoplay?: boolean;
  indicators?: boolean;
}

export const Carousel: FC<CarouselProps> = ({
  children,
  heigth,
  previousIcon,
  nextIcon,
  autoplay = false,
  indicators = true,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const totalChildren = Children.count(children);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalChildren);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalChildren - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoplay) {
      interval = setInterval(() => {
        goToNext();
      }, 3000);
    }

    return () => clearInterval(interval);
  }, [autoplay]);

  return (
    <section className="w-80">
      <article
        className={cn(`relative flex items-center justify-between select-none`)}
        style={{ height: heigth }}
      >
        <div
          className="z-[100] p-1 backdrop-blur-3xl bg-slate-400 rounded-lg ml-2 cursor-pointer"
          onClick={goToPrevious}
        >
          {previousIcon ? (
            previousIcon
          ) : (
            <PreviousIcon width={20} heigth={20} />
          )}
        </div>

        {Children.map(children, (child, index) => {
          if (isValidElement(child)) {
            return cloneElement(
              child as ReactElement<
                HTMLAttributes<HTMLDivElement | HTMLImageElement>
              >,
              {
                className: cn("absolute w-auto", child.props.className),
                style: {
                  height: heigth,
                  zIndex: index === currentIndex ? 10 : 0,
                  opacity: index === currentIndex ? 1 : 0,
                  transition: "opacity 0.5s ease",
                },
              }
            );
          }
          return child;
        })}
        <div
          className="z-[100] p-1 backdrop-blur-3xl bg-slate-400 rounded-lg mr-2 cursor-pointer"
          onClick={goToNext}
        >
          {nextIcon ? nextIcon : <NextIcon width={20} heigth={20} />}
        </div>
      </article>

      {indicators && (
        <div className="flex justify-center gap-x-4 mt-2">
          {Children.map(children, (_, index) => {
            return (
              <div
                className={cn(
                  "w-3 h-3 rounded-full",
                  index === currentIndex ? "bg-slate-800" : "bg-slate-500"
                )}
              ></div>
            );
          })}
        </div>
      )}
    </section>
  );
};
