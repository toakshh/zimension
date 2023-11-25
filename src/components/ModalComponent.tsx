import React, { useState } from "react";
type InputProps = {
  btnName: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.MouseEvent<HTMLButtonElement>, val: string) => void;
};

const Modal = (props: InputProps) => {
  const { btnName, handleInputChange, handleSubmit } = props;
  const [inputVal, setInputVal] = useState("");

  return (
    <>
      <h2 className="mb-6">Add</h2>
      <form className="flex flex-col gap-5">
        <input
          type="text"
          name="text"
          className="border border-gray-200 p-4"
          placeholder="Enter here"
          onChange={(e) => {
            handleInputChange(e);
            setInputVal(e.target.value);
          }}
          value={inputVal}
        />
        <button
          className="btn-danger rounded-md"
          onClick={(e) => handleSubmit(e, inputVal)}
        >
          {btnName}
        </button>
      </form>
    </>
  );
};

export default Modal;
