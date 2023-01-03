import { Link } from "react-router-dom";
import style from "../static/css/navbar.module.css";

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div>
        <Link to={"/#"}>
          {" "}
          <span> NFT </span> GENERATOR{" "}
        </Link>
      </div>
      <div className={style.innerflex}>
        <Link to={"/#"}> About</Link>

        <Link to={"/#"}> Features </Link>

        <Link to={"/#"}> Pricing </Link>
      </div>
      <div className={style.innerflex}>
        <Link to={"/#"}> Login </Link>

        <Link to={"/#"}> Signup </Link>
      </div>
    </div>
  );
};

export default Navbar;
