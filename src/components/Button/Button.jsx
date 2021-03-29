import React, { useContext } from "react";
import { DisplayContext } from "../../context/DisplayContext";
import "./button.css";

export const Button = ({ value, className }) => {
  const { displayReadOut, setDisplayReadOut } = useContext(DisplayContext);
  const onClick =
    value === "C"
      ? () => setDisplayReadOut("")
      : () => setDisplayReadOut(displayReadOut + value);
  return (
    <div data-testid="test-button" className={className} onClick={onClick}>
      {value}
    </div>
  );
};
