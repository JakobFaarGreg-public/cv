import React, { useRef, useState } from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

export default function namePredictor() {
  const [score, setScore] = useState<number>(0);
  const nameInput = useRef<null | HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!nameInput.current) return;
    console.log(nameInput.current.value);
    setScore(5);
    // Calculate score!
  };

  return (
    <>
      <div className={styles.nameInputContainer}>
        <h2
          className={styles.h2}
          style={{
            width: "300px",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "90px",
            marginBottom: "20px",
          }}
        >
          Is <i>blank</i> a good name?
        </h2>
        <form
          style={{
            position: "relative",
            width: "280px",

            marginLeft: "auto",
            marginRight: "auto",
          }}
          onSubmit={handleSubmit}
        >
          <label
            className={styles.p}
            style={{ position: "absolute", left: "0%" }}
            htmlFor="nameInput"
          >
            Name Suggestion
          </label>
          <input
            style={{ position: "absolute", left: "0%", top: "25px" }}
            ref={nameInput}
            type="text"
            name="nameInput"
            id="nameInput"
          />
          <button
            style={{ position: "absolute", left: "175px", top: "25px" }}
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
      {!!nameInput.current?.value ? (
        <h3
          className={styles.h3}
          style={{
            textAlign: "center",
            width: "700px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Marie thinks <b>{nameInput.current?.value}</b> deserves a score of{" "}
          {score}
        </h3>
      ) : (
        <h3
          className={styles.h3}
          style={{
            opacity: "0%",
          }}
        >
          .
        </h3>
      )}
      <div className={styles.indicatorContainer}>
        <Image
          src="/gradient_line.png"
          height={20}
          width={600}
          alt="gradient line representing scores of -2 to 5"
        />
        <Image
          src="/arrow_shadow.png"
          className={`${
            score > 3 ? styles.indicateRight : styles.indicateLeft
          }`}
          height={40}
          width={20}
          alt="Score indicator"
          style={{ position: "absolute", top: "20px" }}
        />
      </div>
    </>
  );
}
