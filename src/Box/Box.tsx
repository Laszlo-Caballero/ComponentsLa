import { FC, forwardRef } from "react";
import { type BoxProps } from "./TypesBox";

export const Box: FC<BoxProps> = forwardRef<HTMLDivElement, BoxProps>(
  (
    {
      component: Component = "div",
      className,
      children,
      height,
      width,
      display = "block",
      alignItems = "start",
      justifyContent = "start",
      sx,
      ...rest
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={className}
        style={{ height, width, display, alignItems, justifyContent, ...sx }}
        {...rest}
      >
        {children}
      </Component>
    );
  }
);
