import React, { useRef, useState } from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import SubmitButton from "@/components/buttons/SubmitButton";

const HEADERS: RequestInit = {
  method: "GET",
  redirect: "follow",
};

interface Data {
  data: {
    color: string;
    id: number;
    name: string;
    pantone_value: string;
    year: number;
  };
}
export default function namePredictor() {
  const [score, setScore] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);
  const nameSuggestion = useRef<null | HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (!nameSuggestion.current) return;
    console.log(nameSuggestion.current.value);

    // calculate id, based on first letter of name suggestion.
    const id = ((parseInt(nameSuggestion.current.value[0], 36) - 9) % 8) + 1;

    try {
      fetch(`https://reqres.in/api/unknown/${id}`, HEADERS)
        .then((res) => res.json())
        .then((data: Data) => {
          setScore(6 - data.data.id);
          console.log(data);
        });
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  return (
    <div style={{ height: "850px" }}>
      <div className={styles.nameInputContainer}>
        <h2
          className={styles.h2}
          style={{
            width: "350px",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "90px",
            marginBottom: "20px",
          }}
        >
          IS <i>BLANK</i> A GOOD NAME?
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
            className={styles.h4}
            style={{ position: "absolute", left: "0%" }}
            htmlFor="nameInput"
          >
            Name Suggestion
          </label>
          <input
            className={styles.inputField}
            style={{ position: "absolute", left: "0%", top: "25px" }}
            ref={nameSuggestion}
            type="text"
            name="nameInput"
            id="nameInput"
            placeholder="Ex. Bo Emmanuel"
          />
          <SubmitButton />
        </form>
      </div>

      {/* If no name suggestion, use invisible placeholder */}
      {!!nameSuggestion.current?.value || isLoading ? (
        <h3
          className={styles.h3}
          style={{
            textAlign: "center",
            width: "700px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Marie thinks "<b>{nameSuggestion.current?.value}</b>" deserves a score
          of {score}
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
      {/* If no name suggestion, use invisible placeholder */}
      <div className={styles.indicatorContainer}>
        <Image
          src="/gradient_line.png"
          priority
          height={20}
          width={600}
          alt="gradient line representing scores of -2 to 5"
        />
        {!!nameSuggestion.current?.value ? (
          <Image
            src="/arrow_shadow.png"
            className={`${
              score == 5
                ? styles.indicate5
                : score == 4
                ? styles.indicate4
                : score == 3
                ? styles.indicate3
                : score == 2
                ? styles.indicate2
                : score == 1
                ? styles.indicate1
                : score == 0
                ? styles.indicate0
                : score == -1
                ? styles.indicateNeg1
                : styles.indicateNeg2
            }`}
            height={40}
            width={20}
            alt="Score indicator"
            style={{ position: "absolute", top: "20px" }}
          />
        ) : (
          <Image
            src="/arrow_shadow.png"
            className={`${styles.indicateNeg2}`}
            height={40}
            width={20}
            alt="Score indicator"
            style={{ position: "absolute", top: "20px", opacity: "0%" }}
          />
        )}
      </div>
    </div>
  );
}
