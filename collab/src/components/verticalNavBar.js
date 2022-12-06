import style from "../static/css/verticalnav.module.css";

const VerticalNavBar = () => {
  return (
    <div className={style.root}>
      <div className={style.container}>
        <span className={style.logo}>Follicle</span>
        <div>
          <input type="checkbox" /> <span> Shampoo </span>{" "}
        </div>
        <div>
          <input type="checkbox" /> <span> Hair Growth </span>{" "}
        </div>
        <div>
          <input type="checkbox" /> <span> Hair Color </span>{" "}
        </div>
        <div>
          <input type="checkbox" /> <span> Rogaine </span>{" "}
        </div>
        <div>
          <input type="checkbox" /> <span> Biotin </span>{" "}
        </div>
        <div>
          <input type="checkbox" /> <span> Vitamin </span>{" "}
        </div>
        <div>
          <input type="checkbox" /> <span> Edibles </span>{" "}
        </div>
        <div>
          <input type="checkbox" /> <span> Gel </span>{" "}
        </div>
        <div>
          <input type="checkbox" /> <span> Cream </span>{" "}
        </div>
      </div>
    </div>
  );
};

export default VerticalNavBar;
