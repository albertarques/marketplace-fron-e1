import React from "react";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "../views/Home";
import Detail from "../pages/Detail";

function PublicRoutes() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/detail" element={<Detail />}></Route>
        </Routes>
      </Router>
);
}

export default PublicRoutes;
