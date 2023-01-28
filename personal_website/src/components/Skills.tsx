import React from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
export default function Skills() {
  return (
    <div className="skills">
      <h2>My Skills</h2>
      <div className="skill-row">
        <Image
          className={styles.programmingImg}
          src="/programming_circle.png"
          alt="Programming-img"
          width={100}
          height={100}
        />
        <h3>Programming</h3>
        <p>
          I enjoy programming as it always provides well defined questions with
          verifiable solutions.
        </p>
        <p>
          To me, the most alluring feature of programming is the great "AHA!"
          moments of solving a problem
        </p>
      </div>
      <div className="skill-row">
        <Image
          className={styles.fishingImg}
          src="/fisker_circle.png"
          alt="Fishing at dawn-img"
          width={100}
          height={100}
        />
        <h3>Fishing</h3>
        <p>
          I enjoy the tranquility of fishing by the lake, watching the float
          waddle in the waves and breathing in nature
        </p>
        <p>
          On the rare occasion that I happen to reel in a fish, I consider
          myself lucky and feel a great sense of accomplishment!
        </p>
      </div>
    </div>
  );
}
