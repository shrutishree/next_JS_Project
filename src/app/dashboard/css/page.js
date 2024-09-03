"use client";
import questions from "./css.json";
import styles from "../../styles/dashboard.module.scss";

export default function cssQuestions() {
  return (
    <div className={styles.wrapper}>
      {questions &&
        questions.cssQuestions.map((question) => (
          <div key={question.id} className={styles.questionAnswer}>
            <h2>
              {question.id}. {question.Que}
            </h2>
            <p>{question.Ans}</p>
          </div>
        ))}
    </div>
  );
}
