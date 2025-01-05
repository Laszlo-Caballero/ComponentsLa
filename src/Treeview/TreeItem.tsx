import { FC, LiHTMLAttributes } from "react";
import { cn } from "../utils/cn";

export const TreeItem: FC<LiHTMLAttributes<HTMLLIElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <li {...props} className={cn("flex items-center", className)}>
      {children}
    </li>
  );
};
