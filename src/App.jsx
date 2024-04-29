import React from "react";
import Layout from "./HOC/Layout";
import Landing from "./Page/Home/Landing";
import Featured from "./Page/Home/Featured";
import Bestseller from "./Page/Home/Bestseller";
import Flashsale from "./Page/Home/Flashsale";
import Onlyforyou from "./Page/Home/Onlyforyou";

const App = () => {
  return (
    <>
      <div className="bg-gray-300">
        <Layout />
        <Landing />
        <Featured />
        <Bestseller />
        <Flashsale />
        <Onlyforyou />
      </div>
    </>
  );
};

export default App;
