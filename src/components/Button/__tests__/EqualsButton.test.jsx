import { EqualsButton } from "../EqualsButton";
import { render, fireEvent } from "@testing-library/react";

describe("<EqualsButton />", () => {
  let equalsButton;
  let calculate;
  describe("When the EqualsButton is clicked", () => {
    beforeEach(() => {
      calculate = jest.fn();
      const { getByTestId } = render(<EqualsButton calculate={calculate} />);
      equalsButton = getByTestId("test-equalsButton");
    });
    it("runs he provided calculate function", () => {
      fireEvent.click(equalsButton);
      expect(calculate).toHaveBeenCalled();
    });
  });
});
