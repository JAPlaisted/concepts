import React from "react";
import "./App.css";
import "./components/Articles";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RandBus10 from "./articles/randbus10";
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
      <BrowserRouter forceRefresh={true}>
        <Routes>
          <Route path="/" component={<Home />} />
          <Route path="/articles/randbus10" component={<RandBus10 />} />
          <Route path="/articles/variables" component={<Variables />} />
          <Route path="/articles/algorithims" component={<Algorithims />} />
          <Route path="/articles/functions" component={<Functions />} />
          <Route path="/articles/queries" component={<Queries />} />
          <Route path="/articles/Expressions" component={<Expressions />} />
          <Route path="/articles/syntax" component={<Syntax />} />
          <Route path="/articles/pseudoCode" component={<PseudoCode />} />
          <Route path="/articles/languages" component={<Languages />} />
          <Route path="/articles/iDES" component={<IDES />} />
          <Route path="/articles/typography" component={<Typography />} />
          <Route path="/articles/booleans" component={<Booleans />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
