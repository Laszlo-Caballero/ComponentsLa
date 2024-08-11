import { FC, HTMLAttributes, ReactElement, useState } from "react";
import { cn } from "../utils/cn";
import { GenerateArray } from "../utils/GenerateArray";
import { VariantProps } from "class-variance-authority";
import { PaginationItem } from "./PaginationItem";
import { pagination } from "./cva";

interface PaginationProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pagination> {
  count: number;
  classNameItem?: string;
  PrevIcon?: ReactElement;
  NextIcon?: ReactElement;
  FirstButton?: ReactElement;
  LastButton?: ReactElement;
}

export const Pagination: FC<PaginationProps> = ({
  count,
  PrevIcon,
  NextIcon,
  FirstButton,
  LastButton,
  variant,
  shape,
  variantColor,
  classNameItem,
  className,
  ...props
}) => {
  const [number, setNumber] = useState<number>(1);

  return (
    <nav
      className={cn("flex items-center gap-x-4 select-none", className)}
      {...props}
    >
      {FirstButton && (
        <div
          className={cn("cursor-pointer")}
          onClick={() => {
            setNumber(1);
          }}
        >
          {FirstButton}
        </div>
      )}

      {PrevIcon && (
        <div
          className={cn("cursor-pointer")}
          onClick={() => {
            setNumber((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
          }}
        >
          {PrevIcon}
        </div>
      )}

      <div className="flex gap-x-2">
        <PaginationItem
          page={number}
          setPage={(number) => setNumber(number)}
          value={1}
          {...{ variant, variantColor, shape, classNameItem }}
        />

        {GenerateArray(count, number).map((value, i) => {
          return (
            <PaginationItem
              key={i}
              page={number}
              setPage={(number) => setNumber(number)}
              value={value}
              {...{ variant, variantColor, shape, classNameItem }}
            />
          );
        })}

        <PaginationItem
          page={number}
          setPage={(number) => setNumber(number)}
          value={count}
          {...{ variant, variantColor, shape, classNameItem }}
        />
      </div>

      {NextIcon && (
        <div
          className="cursor-pointer"
          onClick={() => {
            setNumber((prevCount) =>
              prevCount < count ? prevCount + 1 : count
            );
          }}
        >
          {NextIcon}
        </div>
      )}

      {LastButton && (
        <div
          className={cn("cursor-pointer")}
          onClick={() => {
            setNumber(count);
          }}
        >
          {LastButton}
        </div>
      )}
    </nav>
  );
};
