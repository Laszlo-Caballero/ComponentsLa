import { FC, ReactNode, useState } from "react";
import { cn } from "../utils/cn";
import { LastLeftIcon } from "../Icons/LastLeftIcon";

interface TreeViewProps {
  open?: boolean;
  header?: string | ReactNode;
  children?: ReactNode;
  onClick?: () => void;
  customIcon?: ReactNode;
}

export const TreeView: FC<TreeViewProps> = ({
  open,
  children,
  header,
  customIcon,
  onClick,
}) => {
  const [openTreeView, setOpenTreeView] = useState(open);

  return (
    <div className="w-full">
      <div
        className="flex items-center py-2 hover:bg-gray-100 cursor-pointer"
        onClick={() => {
          setOpenTreeView(!openTreeView);
          onClick?.();
        }}
      >
        {customIcon ? (
          customIcon
        ) : (
          <LastLeftIcon
            className={cn(
              "text-blue-500 w-4 h-4 transition-all delay-300",
              openTreeView && "rotate-90"
            )}
          />
        )}
        {header}
      </div>
      <ul className="pl-4">{openTreeView && children}</ul>
    </div>
  );
};
