"use client";
import styles from "../styles/dashboard.module.scss";
import { useRouter } from "next/navigation";
import Image from "next/image";

const subject = [
  {
    id: 1,
    title: "HTML",
    description: "HTML is the standard markup language for creating Web pages.",
    image: "/html-logo.svg",
  },
  {
    id: 2,
    title: "CSS",
    description: "CSS is the language we use to style an HTML document.",
    image: "/CSS3_logo.svg",
  },
  {
    id: 3,
    title: "JavaScript",
    image: "/JavaScript-logo.svg",
    description: "JavaScript is a programming language",
  },
  // {
  //     id: 4,
  //     title: "React",
  //     image: "/react.svg",
  //     description: "React is a JavaScript library for building user interfaces."
  // },
  // {
  //     id: 5,
  //     title: "Node.js",
  //     image: "/node.svg",
  //     description: "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser."
  // },
  // {
  //     id: 6,
  //     title: "Express.js",
  //     description: "Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs."
  // },
  // {
  //     id: 7,
  //     title: "MongoDB",
  //     image: "/mongodb.svg",
  //     description: "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas."
  // },
  // {
  //     id: 8,
  //     title: "Next.js",
  //     description: "Next.js is an open-source React front-end development web framework that enables functionality such as server-side rendering and generating static websites for React based web applications."

  // }
];

export default function Dashboard() {
  const router = useRouter();

  const handleClick = (title) => {
    router.push(`/dashboard/${title.toLowerCase()}`);
  };
  return (
    <>
      <div className={styles.dashboard}>
        {subject.map((item) => (
          <div
            className={styles.cards}
            key={item.id}
            onClick={() => handleClick(item.title)}
          >
            <h1>{item.title}</h1>
            {item.image && (
              <Image
                src={item.image}
                alt={item.title}
                width={50}
                height={100}
              />
            )}
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
