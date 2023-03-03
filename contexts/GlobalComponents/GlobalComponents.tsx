import { createContext, ReactNode, useContext } from "react";
import type { StoryData } from "storyblok-js-client";

type GlobalComponentsContextProps = {
  globals: StoryData[];
};

const GlobalComponentsContext = createContext<GlobalComponentsContextProps | undefined>(undefined);

const GlobalComponentsProvider = ({ children, globals }: { children: ReactNode; globals: StoryData[] }) => (
  <GlobalComponentsContext.Provider value={{ globals }}>{children}</GlobalComponentsContext.Provider>
);

const useGlobalComponents = () => {
  const context = useContext(GlobalComponentsContext);

  if (context === undefined) {
    throw new Error("useGlobalComponents must be used within a GlobalComponentsProvider");
  }

  return context;
};

export { GlobalComponentsProvider, useGlobalComponents };
