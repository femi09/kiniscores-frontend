import React, {Fragment} from "react";
import NavItems from "./"
import "./index.css"

const NavBar = () => {
  return (
    <Fragment>
    <nav className="w-full bg-blue-900 xl:flex flex-column">
      <h1 className="text-white font-bold text-sm xl:text-xl py-3 xl:mx-8">Kiniscores</h1>
    </nav>
    <NavItems/>
    </Fragment>
  );
};

export default NavBar;
