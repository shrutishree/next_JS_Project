"use client";
import questions from "./html.json";
import styles from "../../styles/dashboard.module.scss";
import React, { useState } from "react";

export default function htmlQuestions() {
  const [id, setId] = useState(0);

  const handelAswer = (id) => {
    setId(id);
  };

  return (
    <div className={styles.wrapper}>
      {questions &&
        questions.htmlQuestions.map((question) => (
          <div key={question.id} className={styles.questionAnswer}>
            {/* <div> */}
            <button onClick={() => handelAswer(question.id)}>
              {question.id}. {question.Que}
            </button>
            {/* <h1>{question.id}. {question.Que}</h1>
                        <button onClick={() => handelAswer(question.id)}>{show && id === question.id ? "-" : "+"}</button> */}
            {/* </div> */}
            {id === question.id && <p>{question.Ans}</p>}
          </div>
        ))}
    </div>
  );
}
