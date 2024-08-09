import { FC, HTMLAttributes } from "react";
import { Button } from "../Button/Button";
import { cn } from "../utils/cn";

interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  headers: string[];
  value: number;
  conteinerClass?: string;
  headersClass?: string;
  childrenClass?: string;
  onChangeTab: (number: number) => void;
}

export const Tabs: FC<TabsProps> = ({
  headers,
  value,
  conteinerClass,
  headersClass,
  childrenClass,
  children,
  onChangeTab,
}) => {
  return (
    <div className={cn("flex flex-col w-full", conteinerClass)}>
      <div className={cn("flex border-b border-b-slate-500", headersClass)}>
        {" "}
        {headers.map((item, index) => {
          return (
            <Button
              className={cn(
                "px-8 rounded-none",
                value == index && "border-b text-blue-400 border-b-blue-400"
              )}
              onClick={() => {
                onChangeTab(index);
              }}
              key={index}
            >
              {item}
            </Button>
          );
        })}
      </div>
      <div className={cn("w-full", childrenClass)}>{children}</div>
    </div>
  );
};
