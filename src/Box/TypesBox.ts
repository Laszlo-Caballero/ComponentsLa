import { CSSProperties, HTMLAttributes, ReactNode } from "react";

type component = "div" | "section" | "main";
type display = "flex" | "grid" | "block";
type alignItem = "stretch" | "center" | "start" | "end";
type justifyContent =
  | "start"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";

export interface BoxProps extends HTMLAttributes<HTMLElement> {
  component: component;
  children: ReactNode;
  height?: number;
  width?: number | string;
  display?: display;
  alignItems?: alignItem;
  justifyContent?: justifyContent;
  sx?: CSSProperties;
}
