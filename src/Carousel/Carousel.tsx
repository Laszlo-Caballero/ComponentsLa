import {
  Children,
  cloneElement,
  FC,
  HTMLAttributes,
  isValidElement,
  ReactElement,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { cn } from "../utils/cn";
import { PreviousIcon } from "../Icons/PreviousIcon";
import { NextIcon } from "../Icons/NextIcon";

interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
  heigth: string;
  width?: string;
  previousIcon?: ReactElement;
  nextIcon?: ReactElement;
  autoplay?: boolean;
  indicators?: boolean;
  buttons?: boolean;
  time?: number;
  cycleNavigation?: boolean;
  classNameContainer?: string;
}

export const Carousel: FC<CarouselProps> = ({
  children,
  heigth,
  width,
  previousIcon,
  nextIcon,
  autoplay = false,
  indicators = true,
  buttons = false,
  time = 3000,
  cycleNavigation = true,
  className,
  classNameContainer,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [onHover, setOnHover] = useState<boolean>(buttons);
  const totalChildren = Children.count(children);

  const goToNextCycle = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalChildren);
  };

  const goToPreviousCycle = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalChildren - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((previndex) =>
      previndex < totalChildren - 1 ? previndex + 1 : previndex
    );
  };

  const goToPrevious = () => {
    if (currentIndex > 0 || currentIndex == totalChildren) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoplay) {
      interval = setInterval(() => {
        if (cycleNavigation) {
          goToNextCycle();
        } else {
          goToNext();
        }
      }, time);
    }

    return () => clearInterval(interval);
  }, [autoplay, time, cycleNavigation]);

  return (
    <section className={classNameContainer}>
      <article
        className={cn(
          `relative flex items-center justify-between select-none`,
          className
        )}
        style={{ height: heigth, width: width }}
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
            className="z-[100] p-1 backdrop-blur-3xl bg-slate-400 rounded-lg ml-2 cursor-pointer"
            onClick={cycleNavigation ? goToPreviousCycle : goToPrevious}
          >
            {previousIcon ? (
              previousIcon
            ) : (
              <PreviousIcon width={20} height={20} />
            )}
          </div>
        )}

        {Children.map(children, (child, index) => {
          if (isValidElement(child)) {
            return cloneElement(
              child as ReactElement<HTMLAttributes<ReactNode>>,
              {
                className: cn("absolute w-auto", child.props.className),
                style: {
                  height: heigth,
                  width: width,
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
            className="z-[100] p-1 backdrop-blur-3xl bg-slate-400 rounded-lg mr-2 cursor-pointer"
            onClick={cycleNavigation ? goToNextCycle : goToNext}
          >
            {nextIcon ? nextIcon : <NextIcon width={20} heigth={20} />}
          </div>
        )}
      </article>

      {indicators && (
        <div
          className="flex justify-center gap-x-4 mt-2"
          style={{ width: width }}
        >
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
