import { cx } from "class-variance-authority";
import { FC, HTMLAttributes } from "react";

export const MenuList: FC<HTMLAttributes<HTMLUListElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <ul className={cx("flex flex-col gap-y-2", className)} {...props}>
      {children}
    </ul>
  );
};
