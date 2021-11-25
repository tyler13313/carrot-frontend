import { useState } from "react";
import { ChangeEvent } from "react";

const WelcomeName = () => {
  const [string1, setString1] = useState("사용자");

  const updateString1 = (event: ChangeEvent<HTMLInputElement>) => {
    const newString = event.currentTarget.value;
    setString1(newString);
  };

  return (
    <section>
      <article> 반갑습니다 {string1}님 </article>
      <section>
        <input type="text" onChange={updateString1} />
      </section>
    </section>
  );
};
export default WelcomeName;
