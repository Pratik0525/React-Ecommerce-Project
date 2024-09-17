import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/PageComponent/Home";
import Layout from "./HOC/Layout";
import About from "./Component/PageComponent/About";
import Becomeseller from "./Component/PageComponent/Becomeseller";
import TermsandServices from "./Component/PageComponent/TermsandServices";
import Contactus from "./Page/Contactus/Contactus";
import Signups from "./Component/PageComponent/Signups";
import { HashLoader, SyncLoader } from "react-spinners";
import { useEffect, useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex h-screen items-center justify-center bg-[#AD43AD]">
          <SyncLoader size={20} color={"white"} />
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default App;
