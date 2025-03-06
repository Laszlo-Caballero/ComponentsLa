"use client";
import {
  Children,
  cloneElement,
  FC,
  HTMLAttributes,
  isValidElement,
  ReactElement,
} from "react";
import { cn } from "../utils/cn";
import { TabHeaderItemProps } from "./TabHeaderItem";
import { useTabs } from "../Tabs/Tabs";

export const TabHeader: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  const { onChangeTabProvider } = useTabs();

  return (
    <div
      className={cn("flex border-b border-b-slate-500", className)}
      {...props}
    >
      {Children.map(children, (child, i) =>
        isValidElement(child)
          ? cloneElement(child as ReactElement<TabHeaderItemProps>, {
              onChangeTab: () => {
                onChangeTabProvider(i);
              },
              index: i,
              ...(child as ReactElement<TabHeaderItemProps>).props,
            })
          : child
      )}
    </div>
  );
};
