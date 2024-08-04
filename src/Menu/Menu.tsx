import { cva, VariantProps } from "class-variance-authority";
import { FC, HTMLAttributes } from "react";
import { cn } from "../utils/cn";

const menu = cva("absolute p-5 border-none rounded-md mt-2 z-30", {
  variants: {
    variant: {
      normal: "bg-slate-500 text-white",
    },
    text: {
      bold: "font-bold text-lg",
      normal: "text-lg",
    },
  },
  defaultVariants: {
    variant: "normal",
    text: "bold",
  },
});

interface MenuProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof menu> {
  open: boolean;
}

export const Menu: FC<MenuProps> = ({
  children,
  open,
  variant,
  className,
  ...props
}) => {
  return (
    open && (
      <div className={cn(menu({ variant, className }))} {...props}>
        <ul className="flex flex-col gap-y-2 ">{children}</ul>
      </div>
    )
  );
};

export default Menu;
