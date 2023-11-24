import React from "react";
import Menu from "./Menu";
import Sidebar from "./Sidebar";
import Main from "./Main";
const Body = () => {
  return (
    <div className="flex lg:flex-row flex-col h-screen">
      <Menu />
      <Main />
      <Sidebar />
    </div>
  );
};

export default Body;
