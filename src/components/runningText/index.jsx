import React from "react";
import styles from "./runningText.module.css";

const RunningText = () => {
  return (
    <div className={`${styles["circle"]}`}>
      <div className={`${styles["outter-circle"]}`}></div>
      <p>Your curved text goes here.</p>
      <div className={`${styles["inner-circle"]}`}></div>
    </div>
  );
};

export default RunningText;
