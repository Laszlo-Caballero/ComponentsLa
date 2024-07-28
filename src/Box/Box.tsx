import React, { CSSProperties, FC, HTMLAttributes, ReactNode } from "react";

type component = "div" | "section" | "main";
type display = "flex" | "grid" | "block";
type alignItem = "stretch" | "center" | "start" | "end";
type justifyContent =
  | "start"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";

interface BoxProps extends HTMLAttributes<HTMLElement> {
  component: component;
  children: ReactNode;
  height?: number;
  width?: number | string;
  display?: display;
  alignItems?: alignItem;
  justifyContent?: justifyContent;
  sx?: CSSProperties;
}

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
