/* eslint-disable react-refresh/only-export-components */
import React, { memo, useEffect, useState } from "react";
import { dropDownValues } from "../constant/constant";
import Button from "./Button";

// type AllProjects = { name: string; operations: [] }[];
type CurrentProjectType = { name: string; count: number }[];
type AllProjects = { name: string; operations: CurrentProjectType }[];
type PropsType = {
  slide: boolean;
  setSlide: (para: boolean) => void;
  setAllProjects: React.Dispatch<React.SetStateAction<AllProjects>>;
  setCurrentProject: React.Dispatch<
    React.SetStateAction<{
      name: string;
      operations: { name: string; count: number }[];
    }>
  >;
  currentProject: {
    name: string;
    operations: { name: string; count: number }[];
  };
};

const Sidebar = (props: PropsType) => {
  const { slide, setSlide, setCurrentProject, setAllProjects, currentProject } =
    props;
  const [formData, setFormData] = useState<{
    name: string;
    count: number;
  }>({
    name: "",
    count: 1,
  });

  // to handle change
  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value.trim(),
    }));
  };

  // to handle submit/add
  const handleAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!currentProject.name) {
      alert("Please select/create any project to add");
    } else {
      if (!formData.name || formData.name.split(" ").join("") === "") {
        alert("Please fill the operation name first ");
        return;
      }
      if (!formData.count || formData.count < 1) return;

      // setting current selected project to the current project
      setCurrentProject((prev) => {
        if (!prev) return prev;
        return {
          ...prev,
          operations: [
            ...prev.operations,
            { name: formData.name, count: formData.count },
          ],
        };
      });

      // reseting form
      setFormData({
        name: "",
        count: 1,
      });
    }
  };

  // handle slide
  const handleSlide = () => setSlide(!slide);

  useEffect(() => {
    // updating allProject list once the operations is added
    setAllProjects((prevProjects) => {
      const updatedProjects = prevProjects.map((project) =>
        project.name === currentProject.name ? currentProject : project
      );
      return updatedProjects as AllProjects;
    });
  }, [currentProject, setAllProjects]);

  return (
    <aside
      className={`relative lg:w-[20%] w-full ${
        !slide && "hidden"
      } bg-gray-300 flex flex-col justify-start items-center p-5 gap-5 transition-opacity ease-in-out duration-1000`}
    >
      {/* heading */}
      <h3 className="text-lg font-light">Add New Operation </h3>
      {/* form part */}
      <form className="flex flex-col lg:w-full sm:w-[50%] w-full gap-4">
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          className="px-2 py-2 rounded-xl border border-gray-900"
          onChange={handleChange}
          value={formData.name}
          required
        />
        <select
          id=""
          name="count"
          value={formData.count}
          className="px-3 py-2 text-center"
          required
          onChange={handleChange}
        >
          {dropDownValues?.map((e, i) => (
            <option key={e + i} value={e} className="text-center">
              {e}
            </option>
          ))}
        </select>
        <Button classProp="btn-danger" clickProp={handleAdd}>
          Add
        </Button>
      </form>
      {/* closing button */}
      <Button
        style={{ position: "absolute" }}
        classProp="btn-classic"
        clickProp={handleSlide}
      >
        x
      </Button>
    </aside>
  );
};

export default memo(Sidebar);
