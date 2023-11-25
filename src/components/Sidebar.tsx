import React, { useState } from "react";
import { dropDownValues } from "../constant/constant";

type propsType = {
  slide: boolean;
  setSlide: (para: boolean) => void;
};

const Sidebar = (props: propsType) => {
  const { slide, setSlide } = props;
  const [formData, setFormData] = useState<{
    name: string;
    count: number;
  }>({
    name: "",
    count: 1,
  });

  // to handle change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value.trim(),
    }));
  };

  // to handle submit
  const handleAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!formData.name || formData.name.trim() === "") return;
    if (!formData.count || formData.count < 1) return;
    setFormData({
      name: "",
      count: 1,
    });
    console.log(formData);
  };

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
        <button
          type="submit"
          className="btn-danger rounded-md hover:hover-cards shadow-2xl"
          onClick={handleAdd}
        >
          Add
        </button>
      </form>
      {/* closing button */}
      <button
        onClick={() => setSlide(!slide)}
        className="bg-white px-4 py-2 rounded-full absolute lg:top-10 lg:-left-5  -top-5 left-5 hover:bg-red-400"
      >
        x
      </button>
    </aside>
  );
};

export default Sidebar;
