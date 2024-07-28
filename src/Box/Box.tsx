import React, { FC } from "react";
import { type BoxProps } from "./TypesBox";

export const Box: FC<BoxProps> = ({
  component,
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
  return React.createElement(
    component,
    {
      className,
      style: { height, width, display, alignItems, justifyContent, ...sx },
      ...rest,
    },
    children
  );
};
