import { CSSProperties, FC, HTMLAttributes, useState } from "react";
import { NextIcon } from "../Icons/NextIcon";
import { PreviousIcon } from "../Icons/PreviousIcon";
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
  count?: number;
  classNameItem?: CSSProperties;
}

export const Pagination: FC<PaginationProps> = ({
  count = 10,
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
      <PreviousIcon
        height={16}
        width={16}
        className={cn("cursor-pointer")}
        onClick={() => {
          setNumber((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
        }}
      />

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

      <NextIcon
        heigth={20}
        width={20}
        className="cursor-pointer"
        onClick={() => {
          setNumber((prevCount) => (prevCount < count ? prevCount + 1 : count));
        }}
      />
    </nav>
  );
};
