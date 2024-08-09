import { ButtonHTMLAttributes, FC, ReactElement } from "react";
import { cn } from "../utils/cn";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva("text-slate-700 rounded-md flex gap-x-2 items-center", {
  variants: {
    variant: {
      outline: "border border-slate-700 bg-transparent",
      border: "border border-slate-700 rounded-xl",
      text: "bg-transparent ",
    },
    text: {
      primary: "text-xl",
      secondary: "text-md",
    },
    colorVariant: {
      success: "bg-green-400 border-none",
      error: "text-red-600 border-red-600",
    },
    size: {
      small: "py-1 px-4",
      medium: "py-2 px-6",
      large: "py-3 px-7",
    },
  },
  defaultVariants: {
    variant: "text",
    text: "primary",
    size: "small",
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  disabled?: boolean;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
}

export const Button: FC<ButtonProps> = ({
  className,
  children,
  variant,
  disabled,
  colorVariant,
  size,
  text,
  startIcon,
  endIcon,
  ...props
}) => {
  return (
    <button
      className={cn(
        button({ variant, colorVariant, size, text, className }),
        disabled && "text-gray-400 font-semibold"
      )}
      {...props}
      disabled={disabled}
    >
      {startIcon && startIcon}
      {children}
      {endIcon && endIcon}
    </button>
  );
};
