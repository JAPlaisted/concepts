import React from "react";
import "./App.css";
import "./components/Articles";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RandBus10 from "./articles/randbus10";
import BestCodeBooks from "./articles/bestcodebooks";
import Musks5Areas from "./articles/musks5areas";
import DividingBy0 from "./articles/dividingby0";
import FiveFavRobots from "./articles/fivefavrobots";
import DevPortfolios7 from "./articles/devportfolios7";
import MuskInterviews5 from "./articles/muskinterviews5";
import ScienceArgument from "./articles/science-argument";
import InterestingCompanies6 from "./articles/interestingcompanies6";
import EverydayThings5 from "./articles/everydaythings5";
import TopBusBooks from "./articles/topbusbooks";
import FavCodeResources from "./articles/favcoderesources";

function App() {
  return (
    <div className="App">
      <BrowserRouter forceRefresh={true}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles/randbus10" element={<RandBus10 />} />
          <Route path="/articles/musks5areas" element={<Musks5Areas />} />
          <Route path="/articles/bestcodebooks" element={<BestCodeBooks />} />
          <Route path="/articles/dividingby0" element={<DividingBy0 />} />
          <Route path="/articles/fivefavrobots" element={<FiveFavRobots />} />
          <Route path="/articles/devportfolios7" element={<DevPortfolios7 />} />
          <Route
            path="/articles/muskinterviews5"
            element={<MuskInterviews5 />}
          />
          <Route
            path="/articles/science-argument"
            element={<ScienceArgument />}
          />
          <Route
            path="/articles/interestingcompanies6"
            element={<InterestingCompanies6 />}
          />
          <Route
            path="/articles/everydaythings5"
            element={<EverydayThings5 />}
          />
          <Route path="/articles/topbusbooks" element={<TopBusBooks />} />
          <Route
            path="/articles/favcoderesources"
            element={<FavCodeResources />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
