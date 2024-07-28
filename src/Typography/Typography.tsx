import { cva, type VariantProps } from "class-variance-authority";
import React, { FC, HTMLAttributes } from "react";
import { cn } from "../utils/cn";

type variant = "h1" | "h2" | "h3" | "h4" | "p" | "span";

const typography = cva("text-sm", {
  variants: {
    text: {
      h1: "text-4xl font-bold",
      h2: "text-3xl font-bold",
      h3: "text-2xl font-bold",
      h4: "text-xl",
      paragraph: "text-sm",
    },
  },
  defaultVariants: {
    text: "paragraph",
  },
});

interface TypographyProps
  extends HTMLAttributes<HTMLElement>,
    VariantProps<typeof typography> {
  variant: variant;
}
export const Typography: FC<TypographyProps> = ({
  variant,
  children,
  className,
  text,
  ...rest
}) => {
  return React.createElement(
    variant,
    { className: cn(typography({ text }), className), ...rest },
    children
  );
};
