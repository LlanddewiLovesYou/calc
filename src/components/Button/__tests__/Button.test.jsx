import { Button } from "../Button";
import { DisplayContext } from "../../../context/DisplayContext";
import { render, fireEvent } from "@testing-library/react";

describe("<Button />", () => {
  let button;
  let setDisplayReadOut;
  let displayReadOut;
  describe("when the value of the button is not 'C' and the button is clicked", () => {
    beforeEach(() => {
      displayReadOut = "1";
      setDisplayReadOut = jest.fn();
      const { getByTestId } = render(
        <DisplayContext.Provider value={{ displayReadOut, setDisplayReadOut }}>
          <Button value="2" />
        </DisplayContext.Provider>
      );
      button = getByTestId("test-button");
    });
    it("adds it's value to displayReadOut and updates the state", () => {
      fireEvent.click(button);
      expect(setDisplayReadOut).toHaveBeenCalledWith("12");
    });
  });
  describe("When the value of the button is 'C' and the button is clicked", () => {
    beforeEach(() => {
      displayReadOut = "1";
      setDisplayReadOut = jest.fn();
      const { getByTestId } = render(
        <DisplayContext.Provider value={{ displayReadOut, setDisplayReadOut }}>
          <Button value="C" />
        </DisplayContext.Provider>
      );
      button = getByTestId("test-button");
    });
    it("it clears the value of displayReadOut", () => {
      fireEvent.click(button);
      expect(setDisplayReadOut).toHaveBeenCalledWith("");
    });
  });
});
