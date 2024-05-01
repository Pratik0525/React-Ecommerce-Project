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
import Becomeseller from "./Component/PageComponent/Becomeseller";
import TermsandServices from "./Component/PageComponent/TermsandServices";
import Contactus from "./Page/Contactus/Contactus";
import Signups from "./Component/PageComponent/Signups";

const App = () => {
  return (
    <>
      <div className="bg-[#FFFFFF]">
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="About" element={<About />} />
              <Route path="Seller" element={<Becomeseller />} />
              <Route path="TermsandServices" element={<TermsandServices />} />
              <Route path="/Contactus" element={<Contactus />} />
            </Route>
            <Route path="/" element={<Home />} />
            <Route path="/Signup" element={<Signups />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
