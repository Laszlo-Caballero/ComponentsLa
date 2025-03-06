import { cva, VariantProps } from "class-variance-authority";
import { FC, forwardRef, HTMLAttributes } from "react";
import { cn } from "../utils/cn";

const aside = cva("sticky top-0 right-0 px-0 h-screen overflow-x-auto", {
  variants: {
    size: {
      sm: "w-52",
      md: "w-64",
      lg: "w-80",
      xl: "w-96",
    },
    display: {
      flex: "flex flex-col",
      grid: "grid grid-cols-1",
    },
    outline: {
      true: "border border-gray-300",
    },
  },
  defaultVariants: {
    display: "flex",
    size: "sm",
  },
});

interface AsideProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof aside> {}

export const Aside: FC<AsideProps> = forwardRef<HTMLDivElement, AsideProps>(
  ({ size, display, outline, children, className }, ref) => {
    return (
      <aside
        className={cn(aside({ size, display, outline }), className)}
        ref={ref}
      >
        {children}
      </aside>
    );
  }
);
