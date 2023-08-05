import React, { createContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [sharedValue, setSharedValue] = useState(false); // Initialize the shared value here

  return (
    <DataContext.Provider value={{ sharedValue, setSharedValue }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
