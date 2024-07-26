import styles from "./Home.module.css";
import Image from "next/image";
import vector1 from "/public/vector1.png";
import Link from "next/link";

export default function HomeScreen() {
  return (
    <div>
      <div className={styles.main}>
        <div className={styles.textCont}>
          <h1 className={styles.header}>LifeLift</h1>
          <p className={styles.subtitle}>Empowering Seniors, Enhancing Lives</p>
          <Link href={"/join"}>
            <button className={styles.btn}>Join Us Now !</button>
          </Link>
        </div>
        <div className={styles.spacer} />
        <Image
          className={styles.image}
          src={vector1}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
}
