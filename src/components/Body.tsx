import Menu from "./Menu";
import Sidebar from "./Sidebar";
import Main from "./Main";
import { useState } from "react";

const Body = () => {
  const [slide, setSlide] = useState<boolean>(true);

  return (
    <div className="flex lg:flex-row flex-col min-h-screen">
      <Menu />
      <Main setSlide={setSlide} slide={slide} />
      <Sidebar slide={slide} setSlide={setSlide} />
    </div>
  );
};

export default Body;
