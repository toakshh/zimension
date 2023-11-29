/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import React, { memo, useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import ModalComponent from "./ModalComponent";

/**
 *Menu Section of the app
 *@function Component
 *@function openModal - Opens the modal
 *@function closeModal - Closes the modal
 *@function handleInputChange - handles input change
 *@function handleSubmit - handles submit
 */

// type declarations
type CurrentProjectType = { name: string; count: number }[];
type AllProjects = { name: string; operations: CurrentProjectType }[];
type PropsCheck = {
  allProjects: AllProjects;
  setAllProjects: React.Dispatch<React.SetStateAction<AllProjects>>;
  setCurrentProject: React.Dispatch<
    React.SetStateAction<{
      name: string;
      operations: { name: string; count: number }[];
    }>
  >;
};

const Menu = (props: PropsCheck) => {
  const { allProjects, setAllProjects, setCurrentProject } = props;

  // for Modal
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  // handle input feild value
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === null) return;
    return (e.target.name = e.target.value);
  };

  // handle submit
  const handleSubmit = (
    e: React.MouseEvent<HTMLButtonElement>,
    val: string
  ) => {
    const regex = /^[A-Za-z0-9]+$/;
    e.preventDefault();
    if (regex.test(val)) {
      if (allProjects?.some((project) => project.name === val)) {
        alert("This project already exists.");
        return;
      }
      const newProject: { name: string; operations: CurrentProjectType } = {
        name: val,
        operations: [],
      };
      setAllProjects((prevItems) => [...prevItems, newProject]);
      onCloseModal();
    } else {
      alert("Please use only alphanumeric characters for name.");
    }
  };

  // handle project selection
  const handleProjectSelect = (selectedProject: any) => {
    setCurrentProject(selectedProject);
  };

  return (
    <aside className="bg-blue-500 lg:w-[25%] w-full rounded-xl flex flex-col justify-start  items-center p-3 ">
      <h3 className="text-3xl font-extrabold text-white">ReactJs Test</h3>
      <div className="flex flex-col justify-start pt-10 items-center h-full w-full ">
        <div className="flex flex-col gap-8 pb-12 min-h-max scroll-smooth sm:mx-0 mx-4 scrollHide max-w-fit">
          {allProjects?.map(
            (
              project: { name: string; operations: CurrentProjectType },
              i: number
            ) => {
              return (
                <h4
                  key={project.name + i}
                  onClick={() => handleProjectSelect(project)}
                  className="px-20 py-4 bg-white text-gray-800 font-bold rounded-xl cursor-pointer hover:hover-cards shadow-md"
                >
                  {project.name}
                </h4>
              );
            }
          )}
        </div>

        <button
          onClick={onOpenModal}
          className="btn-danger rounded-md hover:hover-cards shadow-2xl"
        >
          Create new
        </button>
        <Modal open={open} onClose={onCloseModal} center>
          <ModalComponent
            btnName={"Create Project"}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        </Modal>
      </div>
    </aside>
  );
};

export default memo(Menu);
