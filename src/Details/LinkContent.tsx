import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import { cn } from "../utils/cn";

interface LinkContentProps extends LinkProps {}

export const LinkContent: FC<LinkContentProps> = ({
  children,
  to,
  className,
}) => {
  return (
    <Link className={(cn("px-6 py-2 block"), className)} to={to}>
      {children}
    </Link>
  );
};
