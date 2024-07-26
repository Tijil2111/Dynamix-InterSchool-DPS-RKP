import styles from "./Community.module.css";
export default function CommunityModule() {
  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <div className={styles.headText}>
          <p className={styles.company}>LifeLift</p>
          <p className={styles.title}>
            Join the <span className={styles.span}> Community. </span>
          </p>
        </div>
        <div className={styles.spacer}></div>
        <div className={styles.image}>put picture here ig</div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.row}>
          <div className={styles.textArea}>
            <p className={styles.title1}>Leave a feedback</p>
            <p lassName={styles.subTitle2}>
              Your feedback matters to us, write to us now!
            </p>
          </div>
          <div className={styles.spacer1}></div>
          <div>
            <div className={styles.form}>
              <p className={styles.label}>Name</p>
              <input className={styles.input}></input>

              <p className={styles.label}>Feedback</p>
              <input className={styles.input}></input>
            </div>
            <button className={styles.btn}>Submit</button>
          </div>
        </div>
        <div className={styles.row2}>
          <p>customercare@lifelift.com </p>
          <p>| </p>
          <p>@lifelift</p>
        </div>
      </div>
    </div>
  );
}
