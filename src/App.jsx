import React from "react";
import "./App.css";

import PublicRoutes from "./router/PublicRoutes";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <DataProvider>
      <PublicRoutes/>
    </DataProvider>
  );
}

export default App;
