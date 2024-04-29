import React from "react";
import Toolbar from "../Component/Navigation/Toolbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <>
      <div>
        <Toolbar />
        <div>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
// import React from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { Outlet } from "react-router-dom";

// const Layout = () => {
//   return (
//     <>
//       <div>
//         <Navbar />
//         <div>
//           <Outlet />
//         </div>
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default Layout;
