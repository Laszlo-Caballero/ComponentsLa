import { DetailsHTMLAttributes, FC, ReactElement } from "react";
import { cn } from "../utils/cn";
import { useState } from "react";

type CustomClassNameType = {
  span: string;
  summary: string;
};

interface DetailsBoxProps extends DetailsHTMLAttributes<HTMLDetailsElement> {
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  title: string;
  customClassName: CustomClassNameType;
}

export const DetailsBox: FC<DetailsBoxProps> = ({
  startIcon,
  endIcon,
  title,
  className,
  customClassName,
  children,
  ...props
}) => {
  const [openDetails, setOpenDetails] = useState<boolean>(false);
  return (
    <details className={cn("w-full px-4 cursor-pointer", className)} {...props}>
      <summary
        className={cn(
          "list-none flex items-center gap-3 py-4 w-full justify-between",
          customClassName.summary
        )}
        onClick={() => {
          setOpenDetails(!openDetails);
        }}
      >
        <span className={cn("flex gap-3 items-center", customClassName.span)}>
          {startIcon && startIcon}
          {title}
          {endIcon && endIcon}
        </span>
      </summary>
      {children}
    </details>
  );
};
