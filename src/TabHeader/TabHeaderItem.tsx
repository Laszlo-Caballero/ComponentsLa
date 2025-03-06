"use client";
import { FC, HTMLAttributes } from "react";
import { cn } from "../utils/cn";
import { useTabs } from "../Tabs/Tabs";

export interface TabHeaderItemProps extends HTMLAttributes<HTMLSpanElement> {
  onChangeTab?: (value: number) => void;
  index?: number;
  className?: string;
}

export const TabHeaderItem: FC<TabHeaderItemProps> = ({
  onChangeTab,
  children,
  className,
  index,
}) => {
  const { value } = useTabs();

  return (
    <span
      className={cn(
        "px-8 rounded-none cursor-pointer",
        value == index &&
          "border-b text-blue-400 border-b-blue-400 cursor-default",
        className
      )}
      onClick={() => {
        onChangeTab?.(value);
      }}
    >
      {children}
    </span>
  );
};
