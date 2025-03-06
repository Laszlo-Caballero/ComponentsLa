import { FC, HTMLAttributes } from "react";
import { cn } from "../utils/cn";

interface MenuItemProps extends HTMLAttributes<HTMLLIElement> {}

export const MenuItem: FC<MenuItemProps> = ({
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
