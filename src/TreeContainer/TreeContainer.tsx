import { FC, HTMLAttributes } from "react";
import { cn } from "../utils/cn";
import { useTreeViewContext } from "../Treeview/TreeviewContext";

interface TreeContainerProps extends HTMLAttributes<HTMLUListElement> {
  className?: string;
}

export const TreeContainer: FC<TreeContainerProps> = ({
  children,
  className,
  ...props
}) => {
  const { openTreeView } = useTreeViewContext();

  return (
    <ul className={cn("pl-4", className)} {...props}>
      {openTreeView && children}
    </ul>
  );
};
