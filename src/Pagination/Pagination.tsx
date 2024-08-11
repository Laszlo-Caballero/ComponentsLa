import { FC, HTMLAttributes, ReactElement, useState } from "react";
import { cn } from "../utils/cn";
import { GenerateArray } from "../utils/GenerateArray";
import { cva, VariantProps } from "class-variance-authority";

const pagination = cva("px-3 py-1 cursor-pointer", {
  variants: {
    vartiant: {
      outline: "border border-slate-700 bg-transparent",
      text: "bg-transparent",
    },
    shape: {
      circular: "rounded-full",
      rounded: "rounded-md",
    },
    variantColor: {
      primary: "bg-blue-400",
      secondary: " bg-pink-400",
    },
  },
  defaultVariants: {
    vartiant: "outline",
    shape: "circular",
  },
});

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
  vartiant,
  shape,
  variantColor,
  classNameItem,
  className,
  ...props
}) => {
  const [number, setNumber] = useState<number>(1);

  const setPage = (number: number) => {
    setNumber(number);
  };

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
        <p
          className={cn(
            pagination({ vartiant, shape, variantColor }),
            number == 1 && "bg-slate-600 cursor-default",
            classNameItem
          )}
          onClick={() => {
            setPage(1);
          }}
        >
          1
        </p>

        {GenerateArray(count, number).map((value, i) => {
          return (
            <p
              key={i}
              className={
                typeof value == "number"
                  ? cn(
                      pagination({ vartiant, shape, variantColor }),
                      number == value && "bg-slate-600 cursor-default",
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
        })}
        <p
          className={cn(
            pagination({ vartiant, shape, variantColor }),
            number == count && "bg-slate-600 cursor-default",
            classNameItem
          )}
          onClick={() => {
            setPage(count);
          }}
        >
          {count}
        </p>
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
