import { createContext, useContext, useState } from "react";

const ExtensionsContext = createContext();

export const ExtensionsProvider = ({ children }) => {
  const [selectedExtensions, setSelectedExtensions] = useState([]);

  return (
    <ExtensionsContext.Provider
      value={{ selectedExtensions, setSelectedExtensions }}
    >
      {children}
    </ExtensionsContext.Provider>
  );
};

export const useExtensions = () => {
    return useContext(ExtensionsContext)
}
