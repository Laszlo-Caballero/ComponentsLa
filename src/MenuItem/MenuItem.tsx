import { FC, HTMLAttributes } from "react";
import { cn } from "../utils/cn";

export const MenuItem: FC<HTMLAttributes<HTMLLIElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <li
      className={cn("flex items-center gap-x-4 cursor-pointer", className)}
      {...props}
    >
      {children}
    </li>
  );
};
