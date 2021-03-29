import React from "react";
import "./Display.css";

export const Display = ({ readOut }) => {
  return (
    <div data-testid="test-display" className="display">
      {readOut}
    </div>
  );
};
