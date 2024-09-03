"use client";
import questions from "./javascript.json";
import styles from "../../styles/dashboard.module.scss";
import React, { useState } from "react";

export default function javascriptQuestions() {
  const [id, setId] = useState(0);

  const handelAswer = (id) => {
    setId(id);
  };

  return (
    <div className={styles.wrapper}>
      {questions &&
        questions.javaScriptQuestion.map((question) => (
          <div key={question.id} className={styles.questionAnswer}>
            <button onClick={() => handelAswer(question.id)}>
              {question.id}. {question.Que}
            </button>
            {id === question.id && (
              <ul>
                {question.Ans.split("->").map((answer, index) =>
                  answer.length > 1 ? <li key={index}>{answer}</li> : null
                )}
              </ul>
            )}
          </div>
        ))}
    </div>
  );
}
