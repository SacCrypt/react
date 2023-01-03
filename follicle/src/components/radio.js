import { useState } from "react";
import style from "../static/css/signup.module.css";
const Radio = (person) => {
  const [gender, setGender] = useState("");
  const handleRadio = (string) => {
    setGender(string);
  };
  return (
    <div className={style.radios}>
      {" "}
      Gender:
      <div>
        <label>
          <input
            type="radio"
            name="radio"
            checked={gender === "Male"}
            onChange={() => handleRadio("Male")}
          />
          Male{" "}
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="radio"
            checked={gender === "Female"}
            onChange={() => handleRadio("Female")}
          />
          Female{" "}
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="radio"
            checked={gender === "Other"}
            onChange={() => handleRadio("Other")}
          />
          Other{" "}
        </label>
      </div>
    </div>
  );
};

export default Radio;
