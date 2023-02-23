import React from "react";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { JobsProvider } from "../context/JobsContext";

import Home from "../views/Home";

function PublicRoutes() {
  return (
    <JobsProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </JobsProvider>
);
}

export default PublicRoutes;
