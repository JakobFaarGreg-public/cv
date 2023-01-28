import React from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
export default function Profile() {
  return (
    <div className="profile">
      <Image
        src="/jakob_circle.png"
        alt="portrait-img"
        width={150}
        height={150}
        className={styles.profileImg}
      />
      <h2>Welcome to my page</h2>
      <p>
        I am a
        <a
          className={styles.links}
          href="https://www.aau.dk/uddannelser/bachelor/software"
        >
          BSc. of Software Engineering
        </a>
        .
      </p>
      <p>
        I am currently studying a
        <a
          className={styles.links}
          href="https://www.aau.dk/uddannelser/kandidat/software"
        >
          MSc. in Engineering (Software) at Aalborg University (AAU)
        </a>
      </p>
    </div>
  );
}
