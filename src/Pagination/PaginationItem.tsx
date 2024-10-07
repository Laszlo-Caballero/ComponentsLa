import { FC, HTMLAttributes } from "react";
import { pagination } from "./cva";
import { VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

interface PaginationItemProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pagination> {
  page: number;
  value: number | string;
  setPage: (number: number) => void;
  classNameItem?: string;
  disabled?: boolean;
}

export const PaginationItem: FC<PaginationItemProps> = ({
  page,
  value,
  variant,
  shape,
  variantColor,
  disabled = false,
  classNameItem,
  size,
  setPage,
}) => {
  return (
    <p
      className={
        typeof value == "number"
          ? cn(
              pagination({ variant }),
              page == value
                ? pagination({ shape, variantColor, size }) + " cursor-default"
                : pagination({ shape, size }) + " bg-transparent",
              classNameItem,
              page === value && disabled
                ? " bg-slate-500 opacity-45"
                : disabled && "opacity-45"
            )
          : ""
      }
      onClick={() => {
        if (typeof value == "number") {
          if (!disabled) {
            setPage(value);
          }
        }
      }}
    >
      {value}
    </p>
  );
};
