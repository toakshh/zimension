/* eslint-disable react-refresh/only-export-components */
import { memo } from "react";

type customType = {
  setSlide: (para: boolean) => void;
  slide: boolean;
  currentProject: {
    name: string;
    operations: { name: string; count: number }[];
  };
  onDeleteOperation: (operationName: string) => void;
};

/**
 * @param selectedProject
 * @returns Object { name: "", operations: (2) […] }
 */

const Main = (props: customType) => {
  const { setSlide, slide, currentProject, onDeleteOperation } = props;

  // handle delete operaton
  const handleDeleteOperation = (operationName: string) => {
    onDeleteOperation(operationName);
  };
  // console.log(allProjects);

  return (
    <main className="bg-gray-400 lg:w-[55%] w-full p-10 flex flex-col justify-center items-center gap-10   md:min-h-screen h-full">
      {/* project name */}
      <div className="px-10 py-4 bg-white rounded-lg font-medium text-xl">
        {currentProject.name ? (
          currentProject.name
        ) : (
          <h2 className="text-black text-2xl">No Project Selected</h2>
        )}
      </div>
      {/* operation section */}
      {currentProject.operations.length <= 0 ? (
        <h2 className="text-black font-extrabold text-2xl">No Operations</h2>
      ) : (
        currentProject.operations?.map(
          (e: { name: string; count: number }, i: number) => {
            return (
              <div
                key={e.name + i}
                className="flex sm:flex-row flex-col justify-center items-center sm:gap-10 gap-2  px-3 py-2 w-full border-b border-gray-500 "
              >
                <div className="border-2 border-red-800 bg-red-200 text-red-900 p-3 rounded-xl text-xl">
                  {e.name}
                </div>
                <div className="bg-gray-700 text-xl text-white font-semibold py-3 px-10 rounded-md">
                  {e.count}
                </div>
                <button
                  className="bg-red-600 hover:shadow-lg px-4 py-2 text-lg font-semibold text-white  rounded-full"
                  onClick={() => handleDeleteOperation(e.name)}
                >
                  X
                </button>
              </div>
            );
          }
        )
      )}

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

export default memo(Main);
