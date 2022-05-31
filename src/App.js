import React from "react";
import "./App.css";
import "./components/Articles";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RandBus10 from "./articles/randbus10";
import Algorithims from "./articles/algorithims";
import Musks5Areas from "./articles/musks5areas";
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
          <Route path="/" element={<Home />} />
          <Route path="/articles/randbus10" element={<RandBus10 />} />
          <Route path="/articles/musks5areas" element={<Musks5Areas />} />
          <Route path="/articles/algorithims" element={<Algorithims />} />
          <Route path="/articles/functions" element={<Functions />} />
          <Route path="/articles/queries" element={<Queries />} />
          <Route path="/articles/Expressions" element={<Expressions />} />
          <Route path="/articles/syntax" element={<Syntax />} />
          <Route path="/articles/pseudoCode" element={<PseudoCode />} />
          <Route path="/articles/languages" element={<Languages />} />
          <Route path="/articles/iDES" element={<IDES />} />
          <Route path="/articles/typography" element={<Typography />} />
          <Route path="/articles/booleans" element={<Booleans />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
