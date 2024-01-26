import React from "react";
import styles from "./button.module.scss";
export default function Button({ text, loading, ...props }) {
  return (
    <div className={styles.button}>
      <button {...props}>
        {text}{" "}
        {loading && (
          <div>
            <div className={styles.spinner}></div>
          </div>
        )}
      </button>
    </div>
  );
}
