"use client"
import styles from "./login.module.css";
import { useFormState } from "react-dom";

import { handleForm } from './actions'

const initialState = {
  message: "no message",
}

export default function LoginPage() {

  
  const [state, formAction] = useFormState(handleForm, initialState)

  return (
    <div className={styles.container}>
      <h1 className="text-center p-10 m-10 text-white bg-blue-500 w-100">Login page</h1>
      <form className={styles.form} action={formAction}>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email Address</label>
          <input name="email" type="email"></input>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="password">Password</label>
          <input name="password" type="password"></input>
        </div>
        <div>
          <button className="p-4 m-4 bg-green-500 text-white">Log in</button>
        </div>
        <p aria-live="polite" className="sr-only">
          {state?.message}
        </p>
      </form>
      {state?.message && <h2>{state.message}</h2>}
    </div>
  )
}