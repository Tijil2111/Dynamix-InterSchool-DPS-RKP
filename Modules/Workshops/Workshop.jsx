import styles from "./Workshops.module.css";

export default function WorkShopModule() {
  return (
    <div className={styles.main}>
      <div className={styles.mainText}>
        <p className={styles.company}>LifeLift</p>
        <p className={styles.title}>
          Our <span className={styles.span}> Workshops. </span>
        </p>
        <div className={styles.underline}></div>
      </div>
    </div>
  );
}
