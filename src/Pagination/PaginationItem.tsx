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
}

export const PaginationItem: FC<PaginationItemProps> = ({
  page,
  value,
  variant,
  shape,
  variantColor,
  classNameItem,
  setPage,
}) => {
  return (
    <p
      className={
        typeof value == "number"
          ? cn(
              pagination({ shape }),
              page == value
                ? pagination({ variantColor, variant }) + " cursor-default"
                : " bg-transparent",
              classNameItem
            )
          : "px-2 py-1"
      }
      onClick={() => {
        if (typeof value == "number") {
          setPage(value);
        }
      }}
    >
      {value}
    </p>
  );
};
