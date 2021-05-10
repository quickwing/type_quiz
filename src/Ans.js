import { useState } from "react";
export default function Ans({ children, truth }) {
  const [click, setClick] = useState("answer");
  return (
    <div
      className={click}
      onClick={() => {
        truth ? setClick("answer green") : setClick("answer red");
      }}
    >
      {children}
    </div>
  );
}
