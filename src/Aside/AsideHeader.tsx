import { cx } from "class-variance-authority";
import { FC, PropsWithChildren } from "react";

interface AsideHeaderProps extends PropsWithChildren {
  className?: string;
}

export const AsideHeader: FC<AsideHeaderProps> = ({ children, className }) => {
  return <div className={cx("w-full py-4", className)}>{children}</div>;
};
