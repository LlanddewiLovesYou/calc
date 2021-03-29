import React from "react";

export const EqualsButton = ({ calculate }) => {
  return (
    <div
      data-testid="test-equalsButton"
      onClick={calculate}
      className="button operator equals"
    >
      =
    </div>
  );
};
