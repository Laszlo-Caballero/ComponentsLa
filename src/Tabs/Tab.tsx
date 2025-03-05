import { FC, HTMLAttributes } from "react";
import { useTabs } from "./TabsProvider";
import { cn } from "../utils/cn";

interface TabProps extends HTMLAttributes<HTMLDivElement> {
  index: number;
}

export const Tab: FC<TabProps> = ({ index, children, className }) => {
  const { value } = useTabs();

  return (
    value == index && (
      <div className={cn("p-2 w-full", className)}>{children}</div>
    )
  );
};
