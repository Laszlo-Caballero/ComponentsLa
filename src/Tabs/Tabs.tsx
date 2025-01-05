import { FC, HTMLAttributes } from "react";
import { Button } from "../Button/Button";
import { cn } from "../utils/cn";

type CustomClassNameType = {
  conteiner?: string;
  headers?: string;
  children?: string;
};

interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  headers: string[];
  value: number;
  customClassName?: CustomClassNameType;
  onChangeTab: (number: number) => void;
}

export const Tabs: FC<TabsProps> = ({
  headers,
  value,
  customClassName,
  children,
  onChangeTab,
}) => {
  return (
    <div className={cn("flex flex-col w-full", customClassName?.conteiner)}>
      <div
        className={cn(
          "flex border-b border-b-slate-500",
          customClassName?.headers
        )}
      >
        {" "}
        {headers.map((item, index) => {
          return (
            <Button
              className={cn(
                "px-8 rounded-none",
                value == index && "border-b text-blue-400 border-b-blue-400"
              )}
              onClick={() => {
                onChangeTab?.(index);
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
