import { useState } from "react";
import { ChangeEvent } from "react";

const HiddenName = () => {
  const [name, setName] = useState<string>("");

  const updateName = (event: ChangeEvent<HTMLInputElement>) => {
    let newName = event.currentTarget.value;
    if (newName.length > 2) {
      const startName = newName.substring(0, 1);
      const endName = newName.substring(newName.length - 1, newName.length);
      const hiddenPart = "*".repeat(newName.length - 2);
      newName = startName + hiddenPart + endName;
    }
    setName(newName);
  };

  return (
    <>
      <input type="text" onChange={updateName} />
      <article> {name} </article>
    </>
  );
};
export default HiddenName;
