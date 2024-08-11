import { cva } from "class-variance-authority";

export const pagination = cva("px-3 py-1 cursor-pointer bg-slate-500", {
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
      primary: "bg-blue-400 border-blue-400",
      secondary: " bg-pink-400 border-pink-400",
    },
  },
  defaultVariants: {
    variant: "outline",
    shape: "circular",
  },
});
