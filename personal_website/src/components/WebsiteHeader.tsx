import React from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

function WebsiteHeader() {
  return (
    <div className={styles.topContainer}>
      <h1>Jakob F. G.</h1>
      <h2>Software Developer &amp; Fisherman</h2>
      <Image
        src="/wave.png"
        alt="Handdrawn wave"
        width={150}
        height={48}
        className={styles.wave}
        style={{ bottom: "200px", left: "100px" }}
      />
      <Image
        src="/wave.png"
        alt="Handdrawn wave"
        width={150}
        height={48}
        className={styles.wave}
        style={{ bottom: "100px", left: "300px" }}
      />
      <Image
        src="/wave.png"
        alt="Handdrawn wave"
        width={150}
        height={48}
        className={styles.wave}
        style={{ bottom: "300px", left: "200px" }}
      />
      <Image
        src="/wave.png"
        alt="Handdrawn wave"
        width={150}
        height={48}
        className={styles.wave}
        style={{ bottom: "140px", right: "200px" }}
      />
      <Image
        src="/wave.png"
        alt="Handdrawn wave"
        width={150}
        height={48}
        className={styles.wave}
        style={{ bottom: "300px", right: "160px" }}
      />
      <div
        style={{
          margin: "0 auto;",
          position: "relative",
          height: "300px;",
          width: "300px",
        }}
      >
        <Image
          src="/fishing.png"
          alt="boy fishing-img"
          width={100}
          height={100}
          style={{ left: "208px;", top: "4px", position: "absolute" }}
        />
        <Image
          src="/keyboard.png"
          alt="keyboard-img"
          width={200}
          height={200}
          style={{ left: "50px", position: "absolute" }}
        />
      </div>
    </div>
  );
}

export default WebsiteHeader;
