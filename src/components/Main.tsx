import React from "react";
type customType = {
  setSlide: (para: boolean) => void;
  slide: boolean;
};
const Main = (props: customType) => {
  const { setSlide, slide } = props;
  return (
    <main className="bg-gray-400 lg:w-[55%] w-full p-10 flex flex-col justify-center items-center gap-10  overflow-scroll md:min-h-screen h-full">
      {/* project name */}
      <div className="px-10 py-4 bg-white rounded-lg font-medium text-xl">
        Project name
      </div>
      {/* operation section */}
      {Array(1)
        .fill(0)
        .map((e, i) => {
          return (
            <div
              key={e + i}
              className="flex sm:flex-row flex-col justify-center items-center sm:gap-10 gap-2  px-3 py-2 w-full border-b border-gray-500 "
            >
              <div className="border-2 border-red-800 bg-red-200 text-red-900 p-3 rounded-xl text-xl">
                operation name
              </div>
              <div className="bg-gray-700 text-white font-semibold p-4 rounded-md">
                Tool name
              </div>
              <button className="bg-red-600 hover:shadow-lg px-4 py-2 text-lg font-semibold text-white  rounded-full">
                X
              </button>
            </div>
          );
        })}

      {/* new operation section */}
      <button
        onClick={() => setSlide(!slide)}
        className="rounded-full shadow-2xl bg-white px-5 py-3 text-2xl hover:bg-slate-300 "
      >
        +
      </button>
    </main>
  );
};

export default Main;
