import { FC, ReactNode, useState } from "react";
import { cn } from "../utils/cn";
import { LastLeftIcon } from "../Icons/LastLeftIcon";

type CustomClassName = {
  container?: string;
  header?: string;
  children?: string;
  defaultIcon?: string;
};

interface TreeViewProps {
  open?: boolean;
  header?: string | ReactNode;
  children?: ReactNode;
  onClick?: () => void;
  customIcon?: ReactNode;
  customClassName?: CustomClassName;
}

export const TreeView: FC<TreeViewProps> = ({
  open,
  children,
  header,
  customIcon,
  customClassName,
  onClick,
}) => {
  const [openTreeView, setOpenTreeView] = useState(open);

  return (
    <div className={cn("w-full", customClassName?.container)}>
      <div
        className={cn(
          "flex items-center py-2 gap-x-1 hover:bg-gray-100 cursor-pointer",
          customClassName?.header
        )}
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
              "text-blue-800 w-4 h-4 transition-all delay-300",
              openTreeView && "rotate-90",
              customClassName?.defaultIcon
            )}
          />
        )}
        {header}
      </div>
      <ul className={cn("pl-4", customClassName?.children)}>
        {openTreeView && children}
      </ul>
    </div>
  );
};
