import React from "react";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../views/Home";

function PublicRoutes() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </Router>
);
}

export default PublicRoutes;
