import { useState } from "react";
import { Display } from "./components/Display/Display";
import { Button } from "./components/Button/Button";
import { DisplayContext } from "./context/DisplayContext";
import { Calculator } from "./util/Calculator";
import { EqualsButton } from "./components/Button/EqualsButton";
import "./App.css";

function App() {
  const [displayReadOut, setDisplayReadOut] = useState("");

  const calculate = (expression) => {
    const calc = new Calculator();
    const answer = calc.calculate(expression);
    setDisplayReadOut(answer);
  };

  return (
    <div className="App">
      <Display readOut={displayReadOut} />
      <DisplayContext.Provider value={{ displayReadOut, setDisplayReadOut }}>
        <div className="keypad">
          <div className="numbers">
            <Button className="button" value={1} />
            <Button className="button" value={2} />
            <Button className="button" value={3} />
            <Button className="button" value={4} />
            <Button className="button" value={5} />
            <Button className="button" value={6} />
            <Button className="button" value={7} />
            <Button className="button" value={8} />
            <Button className="button" value={9} />
            <Button className="button" value={0} />
            <Button className="button" value={"C"} />
            <EqualsButton
              className="button operator"
              calculate={() => calculate(displayReadOut)}
            />
          </div>
          <div className="operations">
            <Button className="button operator" value={" + "} />
            <Button className="button operator" value={" - "} />
            <Button className="button operator" value={" * "} />
            <Button className="button operator" value={" / "} />
          </div>
        </div>
      </DisplayContext.Provider>
    </div>
  );
}

export default App;
