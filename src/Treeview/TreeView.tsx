import { FC, HTMLAttributes, ReactNode, useState } from "react";
import { cn } from "../utils/cn";
import { TreeViewContext } from "./TreeviewContext";

interface TreeViewProps extends HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  children?: ReactNode;
  className?: string;
}

export const TreeView: FC<TreeViewProps> = ({
  open,
  children,
  className,
  ...props
}) => {
  const [openTreeView, setOpenTreeView] = useState(open || false);

  return (
    <TreeViewContext.Provider value={{ openTreeView, setOpenTreeView }}>
      <div className={cn("w-full", className)} {...props}>
        {children}
      </div>
    </TreeViewContext.Provider>
  );
};
