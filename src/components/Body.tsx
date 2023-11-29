/* eslint-disable react-refresh/only-export-components */
import Menu from "./Menu";
import Sidebar from "./Sidebar";
import Main from "./Main";
import { memo, useState } from "react";

// type AllProjects = { name: string; operations: [] }[];
type CurrentProjectType = { name: string; count: number }[];
type AllProjects = { name: string; operations: CurrentProjectType }[];
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

  // delete operation for main.tsx
  const onDeleteOperation = (operationName: string) => {
    setAllProjects((prevProjects) => {
      const updatedProjects = prevProjects.map((project) => ({
        ...project,
        operations: project.operations.filter(
          (op: { name: string }) => op.name !== operationName
        ),
      })) as AllProjects;

      // Set the updated currentProject state
      const updatedCurrentProject = updatedProjects.find(
        (project) => project.name === currentProject.name
      );
      if (updatedCurrentProject) {
        setCurrentProject(updatedCurrentProject);
      }
      return updatedProjects;
    });
  };

  return (
    <div className="flex lg:flex-row flex-col min-h-screen">
      <Menu
        allProjects={allProjects}
        setAllProjects={updateAllProjects}
        setCurrentProject={setCurrentProject}
      />

      <Main
        setSlide={setSlide}
        slide={slide}
        currentProject={currentProject}
        onDeleteOperation={onDeleteOperation}
      />

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
