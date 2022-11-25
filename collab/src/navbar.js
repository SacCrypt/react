import React, { useState } from "react";
import "./static/css/home.css";

const Item = (props) => {
  return (
    <>
      <div className={`drop-down-items ${props.state ? "show-drop" : ""}`}>
        {" "}
        <div>
          {" "}
          <a href="/#"> Vulgar Link1 </a>
        </div>
        <div>
          <a href="/#"> Vulgar Link2 </a>{" "}
        </div>
      </div>
    </>
  );
};
const Navbar = () => {
  const [state, setState] = useState(false);
  const condition = () => {
    setState(!state);
    console.log(state);
  };
  return (
    <div className="nav-bar">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Sofia"
      ></link>
      <ul>
        <div className="Logo">
          <li>
            <a href="/#">
              Follicle{" "}
              <img
                href="/#"
                width={30}
                height={30}
                src="https://thumbs.dreamstime.com/b/scissor-vector-icon-isolated-black-background-92671387.jpg"
                alt="scissors"
              />
            </a>
          </li>
        </div>
        <li>
          <a href="/#">Book</a>
        </li>
        <li>
          <a href="/#">Buy</a>
        </li>
        <li>
          <a href="/#">Virtual Hair</a>
        </li>
        <li>
          <a href="/#">Test</a>
        </li>
        <div id="sign-up" className="sign-log">
          <li>
            <a href="/#">Sign Up</a>
          </li>
          <li>
            <a href="/#">Login</a>
          </li>
        </div>
        <div className="borgir">
          <svg onClick={condition} viewBox="0 0 100 75" width="40" height="20">
            <rect width="80" height="10"></rect>
            <rect y="30" width="80" height="10"></rect>
            <rect y="60" width="80" height="10"></rect>
          </svg>
          <span className="tool-tip"> Options </span>
          <Item state={state} />
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
