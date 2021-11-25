import { useState } from "react";
import { ChangeEvent } from "react";

const Conditional = () => {
  const [text, setText] = useState<string>("");

  const updateText = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value);
  };

  return (
    <>
      <input type="text" onChange={updateText} />
      <article> {text.length > 5 && text}</article>
    </>
  );
};
export default Conditional;
