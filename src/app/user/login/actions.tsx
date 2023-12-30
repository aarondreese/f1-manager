"use server"
import bcrypt from "bcrypt";
import { sql } from '@vercel/postgres';
import { redirect } from "next/navigation";


interface UserLogin  {
    password: string,
    emailaddress: string
  }

  /* called using useFormState so form data becomes 2nd argument*/
async function handleForm(currentState:any, formData: FormData) {
    console.log("running handleForm....")
    console.log("form Data: ", formData)
    const { email, password } = Object.fromEntries(formData)
    const sqlCommand = 'SELECT emailaddress, password FROM users WHERE users.emailaddress = $1'
    const result = await sql.query(sqlCommand, [email])
    console.log("result: ", result)
    if(result.rowCount == 0){
      return {
        message: "email address not found"
      }
    } else {
      const resultUser: UserLogin = await result.rows[0]
      if (await bcrypt.compare(password.toString(),resultUser.password)){
        console.log("passwords match")
        redirect("../resources")
      } else {
        return {
          message: "password error"
        }
      }
    }
}

  export {handleForm}