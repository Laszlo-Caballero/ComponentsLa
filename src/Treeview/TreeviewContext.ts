import { createContext, useContext } from "react";

interface TreeViewContextProps {
  openTreeView: boolean;
  setOpenTreeView: (value: boolean) => void;
}

export const TreeViewContext = createContext<TreeViewContextProps | undefined>(
  undefined
);

export const useTreeViewContext = () => {
  const context = useContext(TreeViewContext);
  if (!context) {
    throw new Error(
      "useTreeViewContext must be used within a TreeViewProvider"
    );
  }
  return context;
};
