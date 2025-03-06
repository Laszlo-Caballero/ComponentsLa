import { Children, ReactNode, useCallback, useEffect, useState } from "react";

interface CarouselProps {
  children: ReactNode;
  autoplay?: boolean;
  time?: number;
  cycleNavigation?: boolean;
  buttons?: boolean;
  onChangeItem?: (index: number) => void;
  onGoToNext?: () => void;
  onGoToPrevious?: () => void;
}

export function useCarousel({
  children,
  autoplay,
  cycleNavigation,
  buttons,
  onChangeItem,
  onGoToNext,
  onGoToPrevious,
  time,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [onHover, setOnHover] = useState<boolean>(buttons ? true : false);
  const totalChildren = Children.count(children);

  useEffect(() => {
    if (onChangeItem) {
      onChangeItem(currentIndex);
    }
  }, [currentIndex, onChangeItem]);

  const goToPreviousCycle = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalChildren - 1 : prevIndex - 1
    );
  };

  const goToNextCycle = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalChildren);
  }, [totalChildren]);

  const goToNext = useCallback(() => {
    setCurrentIndex((previndex) =>
      previndex < totalChildren - 1 ? previndex + 1 : previndex
    );
    onGoToNext?.();
  }, [totalChildren, onGoToNext]);

  const goToPrevious = useCallback(() => {
    if (currentIndex > 0 || currentIndex == totalChildren) {
      setCurrentIndex(currentIndex - 1);
      onGoToPrevious?.();
    }
  }, [currentIndex, totalChildren, onGoToPrevious]);

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
  }, [autoplay, time, cycleNavigation, goToNext, goToNextCycle]);

  return {
    currentIndex,
    setCurrentIndex,
    goToNextCycle,
    goToPreviousCycle,
    goToNext,
    goToPrevious,
    onHover,
    setOnHover,
  };
}
