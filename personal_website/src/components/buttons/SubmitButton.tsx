import React from "react";
import styles from "@/styles/Home.module.css";

export default function SubmitButton() {
  return (
    <button
    className={styles.submitButton}
      style={{ position: "absolute", left: "175px", top: "25px" }}
      type="submit"
    >
      Submit
    </button>
  );
}
