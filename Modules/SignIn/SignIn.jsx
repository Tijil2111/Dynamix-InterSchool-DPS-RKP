import styles from "./SignIn.module.css";
import Image from "next/image";
import vector1 from "/public/vector1.png";
export default function SignInModule() {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <div className={styles.headText}>
          <p className={styles.company}>LifeLift</p>
          <p className={styles.title}>
            <span className={styles.span}>Sign </span>In
          </p>
        </div>
        <div className={styles.form}>
          <p className={styles.label}>Name</p>
          <input className={styles.input}></input>
          <p className={styles.label}>Phone Number</p>
          <input className={styles.input}></input>
          <p className={styles.label}>Password</p>
          <input className={styles.input} type="password"></input>
          <p className={styles.pass}>Forget your password ?</p>
          <button className={styles.btn}>Submit</button>
          <p className={styles.pass1}>Sign In via OTP</p>
        </div>
      </div>
      <div className={styles.spacer} />
      <Image
        className={styles.image}
        src={vector1}
        alt="Picture of the author"
      />
    </div>
  );
}
