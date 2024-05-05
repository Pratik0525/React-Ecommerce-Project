import React from "react";
import Layout from "../../HOC/Layout";
import Landing from "../../Page/Home/Landing";
import Featured from "../../Page/Home/Featured";
import Flashsale from "../../Page/Home/Flashsale";
import Onlyforyou from "../../Page/Home/Onlyforyou";
import Bestseller from "../../Page/Home/Bestseller";

const Home = () => {
  return (
    <>
      <div>
        {/* <Layout /> */}
        <Landing />
        <Featured />
        {/* <Bestseller /> */}
        <Flashsale />
        <Onlyforyou />
      </div>
    </>
  );
};

export default Home;
