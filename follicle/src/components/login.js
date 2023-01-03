import { useState } from "react";
import style from "../static/css/login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [signedIn, setSignedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const state = e.target.name;
    const value = e.target.value;
    if (state === "username") {
      setUsername(value);
    } else {
      setPassword(value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className={style.container}>
        <label>
          {" "}
          Username
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
          />
        </label>

        <label>
          {" "}
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <div>
          {" "}
          <input
            id="signedIn"
            name="signedIn"
            type="checkbox"
            onChange={() => setSignedIn(!signedIn)}
          />
          <label id="labelCheck" htmlFor="signedIn">
            {" "}
            Keep me signed in.
          </label>
        </div>
        <p>
          {" "}
          Not a user ? <Link to={"/signup"}> Signup.</Link>
        </p>
        <button type="submit">Login </button>
      </form>
    </div>
  );
};

export default Login;
