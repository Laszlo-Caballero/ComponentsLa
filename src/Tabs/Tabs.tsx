"use client";
import { FC, HTMLAttributes, useState, createContext, useContext } from "react";
import { cn } from "../utils/cn";

type TabsContextType = {
  value: number;
  onChangeTabProvider: (number: number) => void;
};
const TabsContext = createContext<TabsContextType | undefined>(undefined);

interface TabsProviderProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  initialValue?: number;
}

export const Tabs: FC<TabsProviderProps> = ({
  children,
  initialValue,
  ...props
}) => {
  const [value, setValue] = useState<number>(initialValue || 0);
  const onChangeTabProvider = (number: number) => {
    setValue(number);
  };

  return (
    <TabsContext.Provider value={{ value, onChangeTabProvider }}>
      <div className={cn("flex flex-col w-full", props.className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTabs = () => {
  const context = useContext(TabsContext);
  if (context === undefined) {
    throw new Error("useTabs must be used within a TabsProvider");
  }
  return context;
};
