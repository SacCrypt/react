import warning from "../static/images/Warning.svg.png";
import style from "../static/css/addProducts.module.css";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const Authenticate = ({ validate }) => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if (user === "sachin123" && pass === "sachin123") {
      validate(true);
    } else {
      setUser("");
      setPass("");
      setError("Invalid Username or Password!");
    }
  };
  return (
    <div>
      <div className={style.outer}>
        <h2>
          Authenticate{" "}
          <img className={style.warning} src={warning} alt="warning" />
        </h2>
        <div className={style.inner}>
          <input
            type="text"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            placeholder="Username"
            required
          />
          <input
            type="text"
            onChange={(e) => setPass(e.target.value)}
            value={pass}
            placeholder="Password"
            required
          />
          <button className={style.butSub} onClick={submitHandler} type="submit">
            {" "}
            Sign In{" "}
          </button>
          <br></br>
          <br></br>
          <div className={style.error}>{error ? error : ""}</div>
        </div>
      </div>
    </div>
  );
};

export default Authenticate;
