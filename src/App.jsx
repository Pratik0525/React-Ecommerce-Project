import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import Footer from "./Footer/Footer";
import Home from "./Component/PageComponent/Home";
import Layout from "./HOC/Layout";
import About from "./Component/PageComponent/About";

const App = () => {
  return (
    <>
      <div className="bg-[#FFFFFF]">
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="About" element={<About />} />
              {/* <Route path="Contact" element={<Contact />} /> */}
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
