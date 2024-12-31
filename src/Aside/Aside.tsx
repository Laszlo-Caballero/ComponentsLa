import { cva, VariantProps } from "class-variance-authority";
import { FC, HTMLAttributes, ReactNode } from "react";
import { cn } from "../utils/cn";

const aside = cva("h-full px-4", {
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
    VariantProps<typeof aside> {
  header?: ReactNode;
  footer?: ReactNode;
}

export const Aside: FC<AsideProps> = ({
  size,
  display,
  outline,
  children,
  className,
  header,
  footer,
}) => {
  return (
    <aside className={cn(aside({ size, display, outline }), className)}>
      {header && <div className="w-full py-4">{header}</div>}

      {children}

      {footer && <div className="w-full mt-auto">{footer}</div>}
    </aside>
  );
};
