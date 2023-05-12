import './App.css'
import {Route, Routes} from "react-router-dom";
import BestCombination from "./pages/BestCombination/index.js";
import Header from "./components/layout/Header.jsx";
import {Fragment} from "react";

function App() {
  return (
      <Fragment>
          <Header/>
          <Routes>
              <Route path="/" element={<BestCombination />} />
          </Routes>
      </Fragment>
  )
}

export default App
