import { useState } from "react";
/*import logo from "./static/images/Logo.png";*/
import style from "../static/css/signup.module.css";
import Radio from "./radio";

const Signup = () => {
  const [person, setPerson] = useState({
    id: 1,
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    confirmEmail: "",
    emailStyle: "",
    confirmEmailStyle: "",
    password: "",
    confirmPassword: "",
    passwordStyle: "",
    confirmPasswordStyle: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(person);
    setPerson({ ...person, id: person.id + 1 });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const handleEmail = (e) => {
    const email = e.target.name;
    const value = e.target.value;
    if (!value) {
      setPerson((current) => ({ ...current, [email + "Style"]: "" }));
    }
    if (email === "confirmEmail") {
      if (email !== person.email) {
        setPerson({ ...person, [email + "Style"]: "Red" });
      }
    }
    if (
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value) !== true
    ) {
      //setPerson({ ...person, [email]: null });
      setPerson({ ...person, [email]: value, [email + "Style"]: "Red" });
    } else {
      setPerson({ ...person, [email]: value, [email + "Style"]: "Green" });
    }
  };

  const handlePassword = (e) => {
    const password = e.target.name;
    const value = e.target.value;
    if (!value) {
      setPerson((current) => ({ ...current, [password + "Style"]: "" }));
    }
    if (password === "confirmPassword") {
      if (value !== person.password) {
        setPerson({ ...person, confirmPasswordStyle: "Red" });
      } else {
        setPerson({ ...person, confirmPassword: value });
      }
      console.log(person.password, value, person.confirmPasswordStyle);
    }

    if (
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/.test(
        value
      ) === true
    ) {
      setPerson({
        ...person,
        [password]: value,
        [password + "Style"]: "Green",
      });
    } else {
      setPerson({ ...person, [password]: value, [password + "Style"]: "Red" });
    }
  };

  return (
    <>
      <div className={style.container}>
        {/*<div className="logo">
          {" "}
          <img height={30} width={30} src={logo} alt="logo" />
  </div>*/}
        <form className={style.formStyle} onSubmit={handleSubmit}>
          <div className={style.formDiv}>
            <label className={style.formLabel} htmlFor="firstName">
              {" "}
              First Name
            </label>{" "}
            <input
              className={style.textInput}
              id="firstName"
              name="firstName"
              type="text"
              value={person.firstName}
              onChange={handleChange}
              required
            />
            <label className={style.formLabel} htmlFor="lastName">
              {" "}
              Last Name{" "}
            </label>
            <input
              className={style.textInput}
              id="lastName"
              name="lastName"
              type="text"
              value={person.lastName}
              onChange={handleChange}
              required
            />
            <Radio key={person.id} person={person} />
            <label className={style.formLabel} htmlFor="email">
              {" "}
              Email{" "}
            </label>
            <input
              className={style.textInput}
              id="email"
              name="email"
              type="text"
              value={person.email}
              style={{
                border: `2px solid ${person.emailStyle || "Black"}`,
              }}
              onChange={handleEmail}
              required
            />
            <label className={style.formLabel} htmlFor="confirmEmail">
              {" "}
              Confirm Email{" "}
            </label>
            <input
              className={style.textInput}
              id="confirmEmail"
              name="confirmEmail"
              type="text"
              value={person.confirmEmail}
              onChange={handleEmail}
              style={{
                borderColor: `${person.confirmEmailStyle || "Black"} `,
              }}
              required
            />
            <label className={style.formLabel}> Password</label>
            <input
              className={style.textInput}
              id="password"
              name="password"
              type="password"
              value={person.password}
              onChange={handlePassword}
              style={{
                borderColor: `${person.passwordStyle || "Black"}`,
              }}
              required
            />
            <label className={style.formLabel}> Confirm Password</label>
            <input
              className={style.textInput}
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={person.confirmPassword}
              onChange={handlePassword}
              style={{
                borderColor: `${person.confirmPasswordStyle || "grey"}`,
              }}
              required
            />
            <button type="submit"> Register </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
