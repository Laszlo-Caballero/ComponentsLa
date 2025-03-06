import { createContext, useContext } from "react";

export const DetailsContext = createContext<
  | {
      open: boolean;
      setOpen: (open: boolean) => void;
    }
  | undefined
>(undefined);

export const useDetailsContext = () => {
  const context = useContext(DetailsContext);
  if (!context) {
    throw new Error("useDetailsContext must be used within a DetailsContext");
  }
  return context;
};
