import React from "react";
import styles from "../static/css/home.module.css";
const Radio = ({ type, setType }) => {
  return (
    <div className={styles.radioFlex}>
      <label htmlFor="radio1" className={styles.radioLabel}>
        <input
          className={styles.radioButton}
          id="radio1"
          type="radio"
          name="radio"
          checked={type}
          onChange={() => setType(!type)}
        />
        Title
      </label>

      <label htmlFor="radio2" className={styles.radioLabel}>
        <input
          className={styles.radioButton}
          id="radio2"
          type="radio"
          name="radio"
          checked={!type}
          onChange={() => setType(!type)}
        />
        Author
      </label>
    </div>
  );
};

export default Radio;
