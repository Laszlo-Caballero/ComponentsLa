import { FC, HTMLAttributes } from "react";
import { cn } from "../utils/cn";

interface TabProps extends HTMLAttributes<HTMLDivElement> {
  value: number;
  index: number;
}

export const Tab: FC<TabProps> = ({ value, index, children, className }) => {
  return (
    value == index && (
      <div className={cn("p-2 w-full", className)}>{children}</div>
    )
  );
};
