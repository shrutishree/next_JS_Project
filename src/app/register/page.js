"use client";
import { useState } from "react";
import style from "../styles/Authentication.module.scss";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const router = useRouter();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle form submission logic here
    localStorage.setItem(
      "user",
      JSON.stringify({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
      })
    );
    console.log("Form Submitted");
    router.push("/login");
  };
  return (
    <div className={style.description}>
      <h2>Register Page</h2>
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input
          type="text"
          placeholder="First Name"
          required
          value={firstName}
          onChange={handleFirstNameChange}
        />
        <label>Last Name</label>
        <input
          type="text"
          placeholder="Last Name"
          required
          value={lastName}
          onChange={handleLastNameChange}
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={handleEmailChange}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={handlePasswordChange}
        />
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
      <p>
        Already have an account? <Link href="/login">Login</Link>
      </p>
    </div>
  );
}
