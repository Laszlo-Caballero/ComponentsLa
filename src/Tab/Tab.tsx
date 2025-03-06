"use client";
import { FC, HTMLAttributes } from "react";
import { cn } from "../utils/cn";
import { useTabs } from "../Tabs/Tabs";

export interface TabProps extends HTMLAttributes<HTMLDivElement> {
  index?: number;
}

export const Tab: FC<TabProps> = ({ index, children, className }) => {
  const { value } = useTabs();

  return (
    value == index && (
      <div className={cn("p-2 w-full", className)}>{children}</div>
    )
  );
};
