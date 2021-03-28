import React from "react";

export const EqualsButton = ({ calculate }) => {
  return (
    <div onClick={calculate} className="button operator equals">
      =
    </div>
  );
};
