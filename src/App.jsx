import React from "react";
import "./App.css";

import PublicRoutes from "./router/PublicRoutes";
import { JobsProvider } from "./context/JobsContext";

function App() {
  return (
      <JobsProvider>
        <PublicRoutes/>
      </JobsProvider>
  
  );
}

export default App;
