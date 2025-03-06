import {
  Children,
  cloneElement,
  FC,
  HTMLAttributes,
  isValidElement,
  ReactElement,
} from "react";
import { cn } from "../utils/cn";
import { TabProps } from "../Tab/Tab";

export const TabsContainer: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn("w-full", className)} {...props}>
      {Children.map(children, (child, i) =>
        isValidElement(child)
          ? cloneElement(child as ReactElement<TabProps>, {
              index: i,
              ...(child as ReactElement<TabProps>).props,
            })
          : child
      )}
    </div>
  );
};
