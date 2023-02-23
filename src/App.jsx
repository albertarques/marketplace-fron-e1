import React from "react";
import "./App.css";

import PublicRoutes from "./router/PublicRoutes";
import { JobsProvider } from "./context/JobsContext";

function App() {
  return (
        <PublicRoutes/>
  );
}

export default App;
