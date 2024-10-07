import { FC, useEffect, useMemo, useState } from "react";
import { cn } from "../utils/cn";
import { GenerateArray } from "../utils/GenerateArray";
import { PaginationItem } from "./PaginationItem";
import { LastLeftIconPre } from "./../Icons/LastLeftIconPre";
import { LeftIconPre } from "./../Icons/LeftIconPre";
import { NextIconPre } from "./../Icons/NextIconPre";
import { LastRightIconPre } from "./../Icons/LastRightIconPre";
import { PaginationProps } from "./TypePagination";

export const Pagination: FC<PaginationProps> = ({
  count,
  PrevIcon,
  hidePrevButton = false,
  NextIcon,
  hideNextButton = false,
  FirstButton,
  showFistButton = false,
  LastButton,
  showLastButton = false,
  variant,
  shape,
  variantColor,
  disabled = false,
  page,
  classNameItem,
  className,
  size,
  getPage,
  ...props
}) => {
  const [number, setNumber] = useState<number>(page ? page : 1);

  useEffect(() => {
    getPage?.(number);
  }, [number, getPage]);

  const pages = useMemo(() => {
    return GenerateArray(count, number);
  }, [number, count]);

  return (
    <nav
      className={cn("flex items-center gap-x-4 select-none", className)}
      {...props}
    >
      {showFistButton && (
        <div
          className={cn(
            disabled ? "cursor-default opacity-45" : "cursor-pointer"
          )}
          onClick={() => {
            if (!disabled) {
              setNumber(1);
            }
          }}
        >
          {FirstButton ? (
            FirstButton
          ) : (
            <LastRightIconPre width={20} height={20} color="#FFFFFF" />
          )}
        </div>
      )}

      {!hidePrevButton && (
        <div
          className={cn(
            disabled ? "cursor-default opacity-45" : "cursor-pointer"
          )}
          onClick={() => {
            if (!disabled) {
              setNumber((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
            }
          }}
        >
          {PrevIcon ? (
            PrevIcon
          ) : (
            <LeftIconPre width={20} height={20} color="#FFFFFF" />
          )}
        </div>
      )}

      <div className="flex gap-x-2">
        <PaginationItem
          page={number}
          setPage={(number) => setNumber(number)}
          value={1}
          {...{ variant, variantColor, shape, classNameItem, disabled, size }}
        />

        {pages.map((value, i) => {
          return (
            <PaginationItem
              key={i}
              page={number}
              setPage={(number) => setNumber(number)}
              value={value}
              {...{
                variant,
                variantColor,
                shape,
                classNameItem,
                disabled,
                size,
              }}
            />
          );
        })}

        <PaginationItem
          page={number}
          setPage={(number) => setNumber(number)}
          value={count}
          {...{ variant, variantColor, shape, classNameItem, disabled, size }}
        />
      </div>

      {!hideNextButton && (
        <div
          className={cn(
            disabled ? "cursor-default opacity-45" : "cursor-pointer"
          )}
          onClick={() => {
            if (!disabled) {
              setNumber((prevCount) =>
                prevCount < count ? prevCount + 1 : count
              );
            }
          }}
        >
          {NextIcon ? (
            NextIcon
          ) : (
            <NextIconPre width={20} height={20} color="#FFFFFF" />
          )}
        </div>
      )}

      {showLastButton && (
        <div
          className={cn(
            disabled ? "cursor-default opacity-45" : "cursor-pointer"
          )}
          onClick={() => {
            if (!disabled) {
              setNumber(count);
            }
          }}
        >
          {LastButton ? (
            LastButton
          ) : (
            <LastLeftIconPre width={20} height={20} color="#FFFFFF" />
          )}
        </div>
      )}
    </nav>
  );
};
