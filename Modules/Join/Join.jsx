import styles from "./Join.module.css";
export default function JoinModule() {
  return (
    <div className={styles.main}>
      <div className={styles.headText}>
        <p className={styles.company}>LifeLift</p>
        <p className={styles.title}>
          <span className={styles.span}>Join </span>Us
        </p>
      </div>
      <div className={styles.col}>
        <div className={styles.leftCol}>
          <div className={styles.form}>
            <p className={styles.label}>Name</p>
            <input className={styles.input}></input>
            <div className={styles.row}>
              <div>
                <p className={styles.label}>Age</p>
                <input className={styles.rowInput}></input>
              </div>
              <div>
                <p className={styles.label}>Gender</p>
                <input className={styles.rowInput}></input>
              </div>
            </div>
            <p className={styles.label}>Phone Number</p>
            <input className={styles.input}></input>
          </div>
        </div>
        <div className={styles.spacer}></div>
        <div className={styles.rightCol}>
          <div className={styles.form}>
            <p className={styles.label}>Medical Conditions</p>
            <textarea className={styles.inputArea}></textarea>

            <p className={styles.label}>Medication</p>
            <textarea className={styles.inputArea}></textarea>
          </div>
          <button className={styles.btn}>Submit</button>
        </div>
      </div>
    </div>
  );
}
