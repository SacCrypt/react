import style from "../static/css/verticalnav.module.css";
import { useEffect, useState } from "react";
import global from "./products";

const VerticalNavBar = ({ setProd }) => {
  const [check, setCheck] = useState([]);

  useEffect(() => {
    if (check.length) {
      if (check.length === 1) {
        setProd((prev) =>
          prev.filter((item) => {
            return check.includes(item.category) || item.category === "All";
          })
        );
      } else {
        setProd(
          global.filter((ele) => {
            console.log(check.includes(ele.category), ele.category);
            return check.includes(ele.category);
          })
        );
      }
    } else {
      setProd([...global]);
    }
  }, [check]);

  const changeHandler = (value) => {
    if (check.includes(value)) {
      setCheck(check.filter((val) => val !== value));
    } else {
      setCheck([...check, value]);
    }
  };

  return (
    <div className={style.root}>
      <div className={style.container}>
        <span className={style.logo}>Follicle</span>

        <div>
          <input type="checkbox" onChange={() => changeHandler("Shampoo")} />{" "}
          <span> Shampoo </span>{" "}
        </div>
        <div>
          <input type="checkbox" onChange={() => changeHandler("Solution")} />{" "}
          <span> Hair Growth </span>{" "}
        </div>
        <div>
          <input type="checkbox" onChange={() => changeHandler("Color")} />{" "}
          <span> Hair Color </span>{" "}
        </div>
        <div>
          <input type="checkbox" onChange={() => changeHandler("Solution")} />{" "}
          <span> Rogaine </span>{" "}
        </div>
        <div>
          <input type="checkbox" onChange={() => changeHandler("Edible")} />{" "}
          <span> Biotin </span>{" "}
        </div>
        <div>
          <input type="checkbox" onChange={() => changeHandler("Solution")} />{" "}
          <span> Vitamin </span>{" "}
        </div>
        <div>
          <input type="checkbox" onChange={() => changeHandler("Edible")} />{" "}
          <span> Edibles </span>{" "}
        </div>
        <div>
          <input type="checkbox" onChange={() => changeHandler("Solution")} />{" "}
          <span> Gel </span>{" "}
        </div>
        <div>
          <input type="checkbox" onChange={() => changeHandler("Solution")} />{" "}
          <span> Cream </span>{" "}
        </div>
      </div>
    </div>
  );
};

export default VerticalNavBar;
