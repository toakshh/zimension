import React from "react";

const Sidebar = () => {
  return (
    <aside className="lg:w-[20%] w-full bg-gray-300 flex flex-col justify-center items-center p-5 gap-5">
      <h3 className="text-lg font-light">Add New Operation </h3>
      <form className="flex flex-col lg:w-full sm:w-[50%] w-full gap-4">
        <input
          type="text"
          placeholder="Enter name"
          className="px-2 py-2 rounded-xl border border-gray-900"
        />
        <select className="px-3 py-2 text-center">
          {Array(5)
            .fill(0)
            .map((e, i) => (
              <option key={e + i} value="i+1" className="text-center">
                {i + 1}
              </option>
            ))}
        </select>
        <button className="btn-danger rounded-md hover:hover-cards shadow-2xl">
          Add
        </button>
      </form>
    </aside>
  );
};

export default Sidebar;
