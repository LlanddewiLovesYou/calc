import { render, fireEvent } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  beforeEach(() => {});
  it("calculates and displays the correct answer", () => {
    const { getByText } = render(<App />);
    fireEvent.click(getByText("2"));
    fireEvent.click(getByText("0"));
    fireEvent.click(getByText("+"));
    fireEvent.click(getByText("2"));
    fireEvent.click(getByText("0"));
    fireEvent.click(getByText("="));
    expect(getByText("40")).toBeInTheDocument();
  });
});
