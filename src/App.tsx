import { useState } from "react";
import Button from "./Button";
import Calculator from "./pages/Test/components/Calculator";
import Test from "./pages/Test";

const App = () => {
  const [latestName, setLatestName] = useState("");
  const updateLatestName = (name: string) => {
    setLatestName(name);
  };

  return (
    <>
      <Button name="hello " callback={updateLatestName} />
      <Button name="world" callback={updateLatestName} />
      <Button name="wnextop" callback={updateLatestName} />
      <article>{latestName} is clicked!</article>

      <Calculator />

      <Test />
    </>
  );
};

export default App;
