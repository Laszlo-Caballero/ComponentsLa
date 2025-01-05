import { DetailsHTMLAttributes, FC, ReactElement } from "react";
import { cn } from "../utils/cn";
import { useState } from "react";
import { LastLeftIcon } from "../Icons/LastLeftIcon";

type CustomClassNameType = {
  span?: string;
  summary?: string;
  defaultIcon?: string;
  content?: string;
};

interface DetailsBoxProps extends DetailsHTMLAttributes<HTMLDetailsElement> {
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  title: string;
  customClassName?: CustomClassNameType;
  open?: boolean;
  onOpen?: () => void;
}

export const DetailsBox: FC<DetailsBoxProps> = ({
  startIcon,
  endIcon,
  title,
  className,
  customClassName,
  children,
  open,
  onOpen,
  ...props
}) => {
  const [openDetails, setOpenDetails] = useState<boolean>(open || false);
  return (
    <details
      className={cn("w-full  cursor-pointer", className)}
      {...props}
      open={openDetails}
    >
      <summary
        className={cn(
          "list-none flex items-center gap-3 py-4 w-full justify-between px-2",
          customClassName?.summary
        )}
        onClick={() => {
          setOpenDetails(!openDetails);
          onOpen?.();
        }}
      >
        <span
          className={cn(
            "flex gap-3 items-center w-full",
            customClassName?.span
          )}
        >
          {startIcon ? (
            startIcon
          ) : (
            <LastLeftIcon
              className={cn(
                "w-4  h-4 transition-all delay-100",
                openDetails && "rotate-90",
                customClassName?.defaultIcon
              )}
            />
          )}
          {title}
          {endIcon && endIcon}
        </span>
      </summary>
      <div
        className={cn("flex flex-col px-2 gap-y-4 ", customClassName?.content)}
      >
        {children}
      </div>
    </details>
  );
};
