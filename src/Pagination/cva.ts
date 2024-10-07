import { cva } from "class-variance-authority";

export const pagination = cva("cursor-pointer", {
  variants: {
    variant: {
      outline: "border border-slate-700",
      text: "bg-slate-500",
    },
    shape: {
      circular: "rounded-full",
      rounded: "rounded-md",
    },
    variantColor: {
      default: "bg-slate-500",
      primary: "bg-blue-400 border-blue-400",
      secondary: " bg-pink-400 border-pink-400",
    },
    size: {
      small: "px-3 py-1",
      medium: "px-4 py-2 ",
      large: "px-5 py-3",
    },
  },
  defaultVariants: {
    variant: "text",
    shape: "circular",
    variantColor: "default",
    size: "medium",
  },
});
