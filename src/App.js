import React from "react";
import "./App.css";
import "./articles/loops";
import "./components/Articles";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loops from "./articles/loops";
import Algorithims from "./articles/algorithims";
import Variables from "./articles/variables";
import Functions from "./articles/functions";
import Queries from "./articles/queries";
import Expressions from "./articles/expressions";
import Syntax from "./articles/syntax";
import PseudoCode from "./articles/pseudocode";
import Languages from "./articles/languages";
import IDES from "./articles/ides";
import Typography from "./articles/typography";
import Booleans from "./articles/booleans";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="https://upbeat-wiles-ffe15a.netlify.app//articles/loops"
            element={<Loops />}
          />
          <Route exact path="/articles/variables" element={<Variables />} />
          <Route exact path="/articles/algorithims" element={<Algorithims />} />
          <Route exact path="/articles/functions" element={<Functions />} />
          <Route exact path="/articles/queries" element={<Queries />} />
          <Route exact path="/articles/Expressions" element={<Expressions />} />
          <Route exact path="/articles/syntax" element={<Syntax />} />
          <Route exact path="/articles/pseudoCode" element={<PseudoCode />} />
          <Route exact path="/articles/languages" element={<Languages />} />
          <Route exact path="/articles/iDES" element={<IDES />} />
          <Route exact path="/articles/typography" element={<Typography />} />
          <Route exact path="/articles/booleans" element={<Booleans />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
