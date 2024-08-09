import { DetailsHTMLAttributes, FC } from "react";
import { cn } from "../utils/cn";
import { useState } from "react";

interface DetailsBoxProps extends DetailsHTMLAttributes<HTMLDetailsElement> {
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  openIcon?: JSX.Element;
  title: string;
  detailsClass?: string;
  summaryClass?: string;
}

export const DetailsBox: FC<DetailsBoxProps> = ({
  startIcon,
  endIcon,
  openIcon,
  title,
  detailsClass,
  summaryClass,
  children,
  ...props
}) => {
  const [openDetails, setOpenDetails] = useState<boolean>(false);
  return (
    <details
      className={cn("w-full px-4 cursor-pointer", detailsClass)}
      {...props}
    >
      <summary
        className={cn(
          "list-none flex items-center gap-3 py-4 w-full justify-between",
          summaryClass
        )}
        onClick={() => {
          setOpenDetails(!openDetails);
        }}
      >
        <span className="flex gap-3 items-center">
          {startIcon && (openDetails ? startIcon : openIcon)}
          {title}
          {endIcon && (openDetails ? endIcon : openIcon)}
        </span>
      </summary>
      {children}
    </details>
  );
};
