import LoginPage from "../src/pages/menupage/loginpage";
import React from "react";
import { DataProvider } from "../src/pages/menupage/DataContext";

const App = () => {
  return (
    <DataProvider>
      <LoginPage />
    </DataProvider>
  );
};

export default App;
