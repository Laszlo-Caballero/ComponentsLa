import { DetailsHTMLAttributes, FC } from "react";
import { cn } from "../utils/cn";

interface DetailsBoxProps extends DetailsHTMLAttributes<HTMLDetailsElement> {
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  title: string;
  detailsClass?: string;
  summaryClass?: string;
}

export const DetailsBox: FC<DetailsBoxProps> = ({
  startIcon,
  endIcon,
  title,
  detailsClass,
  summaryClass,
  children,
}) => {
  return (
    <details className={cn("w-full px-4 cursor-pointer", detailsClass)}>
      <summary
        className={cn(
          "list-none flex items-center gap-3 py-4 w-full justify-between",
          summaryClass
        )}
      >
        <span className="flex gap-3 items-center">
          {startIcon && startIcon}
          {title}
          {endIcon && endIcon}
        </span>
      </summary>
      {children}
    </details>
  );
};
