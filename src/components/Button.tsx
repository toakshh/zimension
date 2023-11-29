import React from "react";

type propCheck = {
  clickProp: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: string;
  classProp: string;
  style?: object;
};

const Button = (props: propCheck) => {
  const { clickProp, children, classProp, style } = props;

  return (
    <button style={style} className={classProp} onClick={clickProp}>
      {children}
    </button>
  );
};

export default Button;
