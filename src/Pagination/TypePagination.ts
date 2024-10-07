import { HTMLAttributes, ReactNode } from "react";
import { pagination } from "./cva";
import { VariantProps } from "class-variance-authority";

export interface PaginationProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pagination> {
  count: number;
  classNameItem?: string;
  PrevIcon?: ReactNode;
  NextIcon?: ReactNode;
  FirstButton?: ReactNode;
  LastButton?: ReactNode;
  disabled?: boolean;
  page?: number;
  hidePrevButton?: boolean;
  hideNextButton?: boolean;
  showFistButton?: boolean;
  showLastButton?: boolean;
  getPage?: (page: number) => void;
}
