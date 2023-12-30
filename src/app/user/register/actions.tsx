"use server"
import bcrypt from "bcrypt";
import { sql } from '@vercel/postgres';
import { redirect } from "next/navigation";
async function handleForm(formData: FormData) {
    "use server"
    console.log(formData)
    const { name, email, password } = Object.fromEntries(formData)
    const salt = await bcrypt.genSalt(10)

    const hashedPassword = await bcrypt.hash(password.toString(), salt)
    const sqlCommand = `INSERT INTO users (name,emailaddress,password)VALUES($1,$2,$3)`
    const result = await sql.query(sqlCommand, [name, email, hashedPassword])

    redirect("../resources")
}

export {handleForm}