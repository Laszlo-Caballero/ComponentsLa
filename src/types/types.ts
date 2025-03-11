import { ReactNode } from "react";

export interface ColumnDef<T> {
  header?: string;
  headerComponent?: () => ReactNode;
  accessorKey?: keyof T;
  cell?: (row: { row: T }) => ReactNode;
  footer?: string;
  footerComponent?: () => ReactNode;
}

export type ValidateReturn<T> = {
  [K in keyof T]?: T[K] extends object ? ValidateReturn<T[K]> : string;
};
