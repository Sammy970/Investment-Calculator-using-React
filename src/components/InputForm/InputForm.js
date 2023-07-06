import React, { useState } from "react";
import styles from "./InputForm.module.css";

const InputForm = ({ getUserData }) => {
  const [userData, setUserData] = useState({
    "current-savings": "",
    "yearly-contribution": "",
    "expected-return": "",
    duration: "",
  });

  const userDataHandler = (e) => {
    setUserData((prevData) => {
      return { ...prevData, [e.target.id]: +e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    getUserData(userData);
  };

  const resetHandler = (e) => {
    e.preventDefault();
    setUserData({
      "current-savings": "",
      "yearly-contribution": "",
      "expected-return": "",
      duration: "",
    });
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={userData["current-savings"]}
            onChange={userDataHandler}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={userData["yearly-contribution"]}
            onChange={userDataHandler}
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={userData["expected-return"]}
            onChange={userDataHandler}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={userData.duration}
            onChange={userDataHandler}
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button
          type="reset"
          className={styles.buttonAlt}
          onClick={resetHandler}
        >
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InputForm;
