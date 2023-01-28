import React from "react";
import styles from "@/styles/Home.module.css";

export default function BottomContainer() {
  return (
    <div className={styles.bottomContainer}>
      <p
        className={styles.subtle}
        style={{
          marginTop: "0px;",
          paddingTop: "20px;",
          fontSize: "small",
        }}
      >
        © 2022 Jakob Faarbæk Gregersen
      </p>
      <div className={styles.subtle} style={{ paddingBottom: "10px" }}>
        <a
          className={styles.links + " " + styles.subtle}
          href="https://www.flaticon.com/free-icons/fishing"
          title="fishing icons"
        >
          Fishing
        </a>
        and
        <a
          className={styles.links + " " + styles.subtle}
          href="https://www.flaticon.com/free-icons/keyboard"
          title="keyboard icons"
        >
          Keyboard icons created by Freepik - Flaticon
        </a>
      </div>
    </div>
  );
}
