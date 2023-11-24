import React from "react";
import Menu from "./Menu";
import Sidebar from "./Sidebar";
import Main from "./Main";
const Body = () => {
  return (
    <div className="flex flex-row flex-nowrap px-2 h-full ">
      <Menu />
      <Main />
      <Sidebar />
    </div>
  );
};

export default Body;
