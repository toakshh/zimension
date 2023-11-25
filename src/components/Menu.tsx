import React from "react";

const Menu = () => {
  return (
    <aside className="bg-blue-500 h-full lg:w-[25%] w-full rounded-xl flex flex-col justify-start items-center p-3 ">
      <h3 className="text-3xl font-extrabold text-white">ReactJs Test</h3>
      <div className="flex flex-col justify-center items-center h-full w-fullborder-2 border-black overflow-auto ">
        <div className="flex flex-col gap-8 pb-12 min-h-max overflow-scroll scroll-smooth sm:mx-0 mx-4 scrollHide max-w-fit">
          {Array(3)
            .fill("a")
            .map((e, i) => {
              return (
                <h4
                  key={e + i}
                  className="px-20 py-4 bg-white text-gray-800 font-bold rounded-xl cursor-pointer hover:hover-cards shadow-md"
                >
                  Project{i + 1}
                </h4>
              );
            })}
        </div>

        <button className="btn-danger rounded-md hover:hover-cards shadow-2xl">
          Create new
        </button>
      </div>
    </aside>
  );
};

export default Menu;
