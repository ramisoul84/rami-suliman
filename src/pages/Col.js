import { useState } from "react";
import { MdOutlineInvertColors } from "react-icons/md";
import "./col.css";
const Col = () => {
  const [backCol, setBackCol] = useState("blue");
  const x = document.querySelector(":root");
  const change = () => {
    if (backCol === "blue") {
      x.style.setProperty("--color-d", "#0b0c10");
      x.style.setProperty("--color-m", "#fc4445");
      x.style.setProperty("--color-c", "#4db5ff");
      setBackCol("black");
    }
    if (backCol === "black") {
      x.style.setProperty("--color-d", "#1f1f38");
      x.style.setProperty("--color-m", "#4db5ff");
      x.style.setProperty("--color-c", "#fc4445");
      setBackCol("blue");
    }
  };
  return (
    <div>
      <p className="col-btn" onClick={change}>
        <MdOutlineInvertColors />
      </p>
    </div>
  );
};
export default Col;
