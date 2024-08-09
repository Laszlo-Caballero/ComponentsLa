import { DetailsHTMLAttributes, FC, ReactElement } from "react";
import { cn } from "../utils/cn";
import { useState } from "react";

interface DetailsBoxProps extends DetailsHTMLAttributes<HTMLDetailsElement> {
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  title: string;
  detailsClass?: string;
  summaryClass?: string;
  spamClass?: string;
}

export const DetailsBox: FC<DetailsBoxProps> = ({
  startIcon,
  endIcon,
  title,
  detailsClass,
  summaryClass,
  spamClass,
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
        <span className={cn("flex gap-3 items-center", spamClass)}>
          {startIcon && startIcon}
          {title}
          {endIcon && endIcon}
        </span>
      </summary>
      {children}
    </details>
  );
};
