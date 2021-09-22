import React, { Fragment } from "react";
import NavItems from "../NavItems";
import "./index.css";

const NavBar = () => {
  return (
    <Fragment>
      <nav className="w-full nav-bar bg-blue-900 flex flex-col">
        <div>
          <h1 className="text-white text-lg mx-4 font-bold text-sm py-2 xl:text-xl xl:py-3 xl:mx-8">
            Kiniscores
          </h1>
        </div>
        <div className="hidden nav-white shadow-sm border-b-8 border-blue-900 xl:block h-12"></div>
        <NavItems />
      </nav>
    </Fragment>
  );
};

export default NavBar;
