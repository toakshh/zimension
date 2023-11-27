/* eslint-disable react-refresh/only-export-components */
import Menu from "./Menu";
import Sidebar from "./Sidebar";
import Main from "./Main";
import { memo, useState } from "react";

type AllProjects = { name: string; operations: [] }[];
const Body = () => {
  const [slide, setSlide] = useState<boolean>(true); // keep track of sidebar open or closed
  const [allProjects, setAllProjects] = useState<AllProjects>([]); //list of all projects

  const updateAllProjects: React.Dispatch<React.SetStateAction<AllProjects>> = (
    callback
  ) => {
    setAllProjects((prevProjects) =>
      typeof callback === "function" ? callback(prevProjects) : callback
    );
  };
  const [currentProject, setCurrentProject] = useState<{
    name: string;
    operations: { name: string; count: number }[];
  }>({
    name: "",
    operations: [],
  });

  return (
    <div className="flex lg:flex-row flex-col min-h-screen">
      <Menu
        allProjects={allProjects}
        setAllProjects={updateAllProjects}
        setCurrentProject={setCurrentProject}
      />

      <Main setSlide={setSlide} slide={slide} currentProject={currentProject} />

      <Sidebar
        slide={slide}
        setSlide={setSlide}
        setCurrentProject={setCurrentProject}
        setAllProjects={setAllProjects}
        currentProject={currentProject}
      />
    </div>
  );
};

export default memo(Body);
