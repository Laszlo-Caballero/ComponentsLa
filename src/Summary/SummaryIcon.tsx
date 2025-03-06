"use client";
import {
  Children,
  cloneElement,
  FC,
  isValidElement,
  PropsWithChildren,
  ReactElement,
} from "react";
import { cn } from "../utils/cn";
import { useDetailsContext } from "../Details/DetailsContext";

interface SummaryIconProps extends PropsWithChildren {
  className?: string;
  rotateClassName?: string;
}

export const SummaryIcon: FC<SummaryIconProps> = ({
  className,
  children,
  rotateClassName,
}) => {
  const { open } = useDetailsContext();

  return (
    <span className={cn("flex gap-3 items-center w-full", className)}>
      {Children.map(children, (child) =>
        isValidElement(child)
          ? cloneElement(child as ReactElement<HTMLDivElement>, {
              ...(child as ReactElement<HTMLDivElement>).props,
              className: cn(
                "transition-all delay-100",
                (child as ReactElement<HTMLDivElement>).props.className,
                open && rotateClassName
              ),
            })
          : child
      )}
    </span>
  );
};
