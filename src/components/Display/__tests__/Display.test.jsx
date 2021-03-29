import { Display } from "../Display";
import { render } from "@testing-library/react";

describe("<Display />", () => {
  let readOut;
  describe("when a button with a value is clicked, it appears on the readout", () => {
    beforeEach(() => {
      readOut = "10";
    });
    it("displays the readout it is given", () => {
      const { getByText } = render(<Display readOut={readOut} />);
      expect(getByText("10")).toBeInTheDocument();
    });
  });
});
