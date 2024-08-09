import { FC, HTMLAttributes, ReactElement } from "react";
import { cn } from "../utils/cn";
import { cva, VariantProps } from "class-variance-authority";

const nav = cva("w-full p-4", {
  variants: {
    size: {
      normal: "h-14",
      big: "h-28",
    },
    display: {
      flex: "flex items-center",
      grid: "grid",
    },
  },
  defaultVariants: {
    size: "normal",
    display: "flex",
  },
});

interface NavProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof nav> {
  startIcon?: ReactElement;
  endIcon?: ReactElement;
}

export const Nav: FC<NavProps> = ({
  children,
  startIcon,
  endIcon,
  className,
  size,
  display,
}) => {
  return (
    <nav className={cn(nav({ size, display }), className)}>
      {startIcon && startIcon}
      {children}
      {endIcon && endIcon}
    </nav>
  );
};
