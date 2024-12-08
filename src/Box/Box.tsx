import { FC } from "react";
import { type BoxProps } from "./TypesBox";

export const Box: FC<BoxProps> = ({
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
}) => {
  return (
    <Component
      className={className}
      style={{ height, width, display, alignItems, justifyContent, ...sx }}
      {...rest}
    >
      {children}
    </Component>
  );
};
