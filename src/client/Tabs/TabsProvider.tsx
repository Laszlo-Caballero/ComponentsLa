import { FC, HTMLAttributes, useState, createContext, useContext } from "react";

type TabsContextType = {
  value: number;
  onChangeTabProvider: (number: number) => void;
};
const TabsContext = createContext<TabsContextType | undefined>(undefined);

interface TabsProviderProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  initialValue?: number;
}

export const TabsProvider: FC<TabsProviderProps> = ({
  children,
  initialValue,
}) => {
  const [value, setValue] = useState<number>(initialValue || 0);
  const onChangeTabProvider = (number: number) => {
    setValue(number);
  };

  return (
    <TabsContext.Provider value={{ value, onChangeTabProvider }}>
      {children}
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
