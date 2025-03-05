"use client";
import { Button } from "../Button/Button";
import { FC, HTMLAttributes } from "react";
import { TabsProvider, useTabs } from "./TabsProvider";
import { cn } from "../utils/cn";

type CustomClassNameType = {
  conteiner?: string;
  headers?: {
    container?: string;
    item?: string;
  };
  children?: string;
};

interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  headers: string[];
  value?: number;
  customClassName?: CustomClassNameType;
  onChangeTab?: (number: number) => void;
}

export const ContainerTabs: FC<TabsProps> = ({
  headers,
  customClassName,
  children,
  onChangeTab,
}) => {
  const { onChangeTabProvider, value } = useTabs();

  return (
    <div className={cn("flex flex-col w-full", customClassName?.conteiner)}>
      <div
        className={cn(
          "flex border-b border-b-slate-500",
          customClassName?.headers?.container
        )}
      >
        {" "}
        {headers.map((item, index) => {
          return (
            <Button
              className={cn(
                "px-8 rounded-none",
                value == index && "border-b text-blue-400 border-b-blue-400",
                customClassName?.headers?.item
              )}
              onClick={() => {
                onChangeTab?.(index);

                onChangeTabProvider(index);
              }}
              key={index}
            >
              {item}
            </Button>
          );
        })}
      </div>
      <div className={cn("w-full", customClassName?.children)}>{children}</div>
    </div>
  );
};

export const Tabs: FC<TabsProps> = ({ value, ...props }) => {
  return (
    <TabsProvider initialValue={value}>
      <ContainerTabs {...props} />
    </TabsProvider>
  );
};
