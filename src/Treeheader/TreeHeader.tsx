import { FC, HTMLAttributes, ReactNode } from "react";
import { cn } from "../utils/cn";
import { LastLeftIcon } from "../Icons/LastLeftIcon";
import { useTreeViewContext } from "../Treeview/TreeviewContext";

interface TreeHeaderProps extends HTMLAttributes<HTMLDivElement> {
  customIcon?: ReactNode;
  className?: string;
  onClick?: () => void;
  classNameDefaultIcon?: string;
}

export const TreeHeader: FC<TreeHeaderProps> = ({
  className,
  customIcon,
  onClick,
  children,
  classNameDefaultIcon,
  ...props
}) => {
  const { openTreeView, setOpenTreeView } = useTreeViewContext();

  return (
    <div
      className={cn(
        "flex items-center py-2 gap-x-1 hover:bg-gray-100 cursor-pointer",
        className
      )}
      onClick={() => {
        setOpenTreeView(!openTreeView);
        onClick?.();
      }}
      {...props}
    >
      {customIcon ? (
        customIcon
      ) : (
        <LastLeftIcon
          className={cn(
            "text-blue-800 w-4 h-4 transition-all delay-300",
            openTreeView && "rotate-90",
            classNameDefaultIcon
          )}
        />
      )}
      {children}
    </div>
  );
};
