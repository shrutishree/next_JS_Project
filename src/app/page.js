"use client"
import styles from "./styles/page.module.scss";
import Link from "next/link";
import { useRouter } from "next/navigation"
import { useEffect } from "react";

export default function Home() {

  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
      router.push("/dashboard");
    }
  }, [isLoggedIn]);


  return (
    <div className={styles.description}>
          Welcome to the Home Page. If you have an account, please{' '}
          <Link href="/login">login</Link> or{' '}
          <Link href="/register">create an account</Link>.
    </div>
  );
}
