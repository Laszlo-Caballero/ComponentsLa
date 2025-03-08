import { ReactNode } from "react";

export interface ColumnDef<T> {
  header?: string;
  headerComponent?: () => ReactNode;
  accessorKey?: keyof T;
  cell?: (row: { row: T }) => ReactNode;
  footer?: string;
  footerComponent?: () => ReactNode;
}

export type ValidateReturn<T> = Partial<Record<keyof T, string>>;
