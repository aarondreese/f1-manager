import styles from "./register.module.css";
// import bcrypt from "bcrypt";
// import { sql } from '@vercel/postgres';
// import { redirect } from "next/navigation";
// async function handleForm(formData: FormData) {
//     "use server"
//     console.log(formData)
//     // validate data
//     // const name= formData.get("name")
//     // const email = formData.get("email")
//     // const password = formData.get("password")
//     const { name, email, password } = Object.fromEntries(formData)
//     const salt = await bcrypt.genSalt(10)

//     const hashedPassword = await bcrypt.hash(password.toString(), salt)
//     const sqlCommand = `INSERT INTO users (name,emailaddress,password)VALUES($1,$2,$3)`
//     const result = await sql.query(sqlCommand, [name, email, hashedPassword])

//     redirect("../resources")
// }
import { handleForm } from "./actions";

export default function UserRegister() {

    return (
        <div className={styles.container}>
            <h1 className="text-xxl font-bold text-gray-900">User Registration</h1>
            <div className={styles.form}>

                <form className="space-y-4" action={handleForm}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name"></input>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" name="email"></input>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="pasword">Password</label>
                        <input type="password" name="password"></input>
                    </div>
                    <div>
                        <button>Register</button>
                    </div>
                </form>
            </div>
        </div>



    )
}