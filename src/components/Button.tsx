import React from "react";

type propCheck = {
  clickProp: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  children: string;
  classProp: string;
  style?: string;
};
type position = "sticky" | "fixed" | "relative" | "static" | "absolute";

const Button = (props: propCheck) => {
  const { clickProp, children, classProp, style } = props;

  return (
    <button
      style={{ position: (style as position) ?? "static" }}
      className={classProp}
      onClick={clickProp}
    >
      {children}
    </button>
  );
};

export default Button;
