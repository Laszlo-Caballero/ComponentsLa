"use client";
import { DetailsHTMLAttributes, FC } from "react";
import { cn } from "../utils/cn";
import { useState } from "react";
import { DetailsContext } from "./DetailsContext";

interface DetailsProps extends DetailsHTMLAttributes<HTMLDetailsElement> {
  open?: boolean;
}

export const Details: FC<DetailsProps> = ({
  className,
  open,
  children,
  ...props
}) => {
  const [openDetails, setOpenDetails] = useState<boolean>(open || false);
  return (
    <DetailsContext.Provider
      value={{ open: openDetails, setOpen: setOpenDetails }}
    >
      <details
        className={cn("w-full  cursor-pointer", className)}
        {...props}
        open={openDetails}
      >
        {children}
      </details>
    </DetailsContext.Provider>
  );
};
