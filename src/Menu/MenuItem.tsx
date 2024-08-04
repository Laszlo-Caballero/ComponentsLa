import { FC, HTMLAttributes, ReactElement } from "react";
import { cn } from "../utils/cn";

interface MenuItemProps extends HTMLAttributes<HTMLLIElement> {
  startIcon?: ReactElement;
  endIcon?: ReactElement;
}

export const MenuItem: FC<MenuItemProps> = ({
  children,
  className,
  startIcon,
  endIcon,
  ...props
}) => {
  return (
    <li
      className={cn("flex items-center gap-x-4 cursor-pointer", className)}
      {...props}
    >
      {startIcon && startIcon} {children} {endIcon && endIcon}
    </li>
  );
};
