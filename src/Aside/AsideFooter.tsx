import { cx } from "class-variance-authority";
import { FC, PropsWithChildren } from "react";

interface AsideFooterProps extends PropsWithChildren {
  className?: string;
}

export const AsideFooter: FC<AsideFooterProps> = ({ children, className }) => {
  return <div className={cx("w-full mt-auto", className)}>{children}</div>;
};
