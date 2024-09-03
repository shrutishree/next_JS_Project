"use client";
import { useState } from "react";
import style from "../styles/Authentication.module.scss";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!localStorage.getItem("user")) {
      alert("No user exists, please register");
      return;
    }
    const users = JSON.parse(localStorage.getItem("user"));

    const existEmail = users.email;
    const existPassword = users.password;

    if (email !== existEmail) {
      alert("Email does not exist");
    } else if (email === existEmail && password !== existPassword) {
      alert("Password is incorrect");
    } else {
      alert("Login successful");
      localStorage.setItem("isLoggedIn", true);
    }
    // Reset the form
    setEmail("");
    setPassword("");
    router.push("/dashboard");
  };

  return (
    <div className={style.description}>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          required
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
      <p>
        Do not have an account? <Link href="/register">Register</Link>
      </p>
    </div>
  );
}
