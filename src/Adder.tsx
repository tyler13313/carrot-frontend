import { useState } from "react";
import { ChangeEvent } from "react";

const Adder = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  const updateNumber1 = (event: ChangeEvent<HTMLInputElement>) => {
    const newNumber = Number.parseInt(event.currentTarget.value);
    setNumber1(newNumber);
  };

  const updateNumber2 = (event: ChangeEvent<HTMLInputElement>) => {
    const newNumber = Number.parseInt(event.currentTarget.value);
    setNumber2(newNumber);
  };

  const calculated = number1 + number2;
  return (
    <section>
      <article>계산 결과 : {calculated} </article>
      <section>
        {" "}
        <input type="text" onChange={updateNumber1} />
        +
        <input type="text " onChange={updateNumber2} />
      </section>
    </section>
  );
};
export default Adder;
