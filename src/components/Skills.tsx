import React from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
export default function Skills() {
  return (
    <div className="skills">
      <h2 className={styles.h2}>My Skills</h2>
      <div className={styles.skillRow}>
        <Image
          className={styles.programmingImg}
          src="/cv/programming_circle.png"
          alt="Programming-img"
          width={100}
          height={100}
        />
        <h3 className={styles.h3}>Programming</h3>
        <p className={styles.p}>
          I enjoy programming as it always provides well defined questions with
          verifiable solutions.
        </p>
        <p className={styles.p}>
          To me, the most alluring feature of programming is the great &quot;AHA!&quot;
          moments of solving a problem
        </p>
      </div>
      <div className={styles.skillRow}>
        <Image
          className={styles.fishingImg}
          src="/cv/fisker_circle.png"
          alt="Fishing at dawn-img"
          width={100}
          height={100}
        />
        <h3 className={styles.h3}>Fishing</h3>
        <p className={styles.p}>
          I enjoy the tranquility of fishing by the lake, watching the float
          waddle in the waves and breathing in nature
        </p>
        <p className={styles.p}>
          On the rare occasion that I happen to reel in a fish, I consider
          myself lucky and feel a great sense of accomplishment!
        </p>
      </div>
    </div>
  );
}
