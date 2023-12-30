import Link from "next/link"
import styles from "./user.module.css"

const page = () => {
  return (
    <div>
        <Link className={styles.link}  href="./user/login">Login</Link>
        <Link href="./user/register">Register</Link>
    </div>

  )
}

export default page