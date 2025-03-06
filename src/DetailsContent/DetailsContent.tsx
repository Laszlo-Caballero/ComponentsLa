import { FC, HTMLAttributes } from "react";
import { cn } from "../utils/cn";

export const DetailsContent: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn("flex flex-col px-2 gap-y-4 ", className)} {...props}>
      {children}
    </div>
  );
};
