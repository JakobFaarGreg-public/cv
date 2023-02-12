import React from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
export default function Profile() {
  return (
    <div className={styles.profile}>
      <Link href="/features/namePredictor">
        <Image
          src="/cv/jakob_circle.png"
          alt="portrait-img"
          width={150}
          height={150}
          className={styles.profileImg}
        />
      </Link>
      <h2 className={styles.h2}>Welcome to my page</h2>
      <p className={styles.p}>
        I am a{" "}
        <a
          className={styles.links}
          href="https://www.aau.dk/uddannelser/bachelor/software"
        >
          BSc. of Software Engineering
        </a>
        .
      </p>
      <p className={styles.p}>
        I am currently studying a{" "}
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
