import { cva, VariantProps } from "class-variance-authority";
import { FC, HTMLAttributes } from "react";
import { cn } from "../utils/cn";
import { useCloseDiv } from "../main";

const menu = cva("absolute p-5 border-none text-nowrap rounded-md z-30", {
  variants: {
    variant: {
      normal: "bg-blue-950 text-white",
    },
    text: {
      bold: "font-bold text-lg",
      normal: "font-normal text-base",
    },
    position: {
      left: "top-0 -translate-x-full",
      right: "top-0 left-full",
      bottom: "top-full",
      top: "bottom-full",
    },
  },
  defaultVariants: {
    variant: "normal",
    text: "bold",
    position: "left",
  },
});

interface MenuProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof menu> {
  open: boolean;
  onClose?: (open: boolean) => void;
}

export const Menu: FC<MenuProps> = ({
  children,
  open,
  variant,
  className,
  position,
  text,
  onClose,
  ...props
}) => {
  const ref = useCloseDiv({ closeFunction: onClose });

  return (
    open && (
      <div
        ref={ref}
        className={cn(menu({ variant, className, text, position }))}
        {...props}
      >
        {children}
      </div>
    )
  );
};

export default Menu;
