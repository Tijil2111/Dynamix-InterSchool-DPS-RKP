import styles from "./Profile.module.css";
import Image from "next/image";
import avatar from "/public/dashboard/avatar.png";
export default function Profile() {
  return (
    <div className={styles.main}>
      <div className={styles.box}>
        <div className={styles.textCon}>
          <p className={styles.name}>Narender</p>
          <p className={styles.age}>86 years old, Mumbai</p>
          <div className={styles.row}>
            <div className={styles.boxRow}>
              <p>Blood</p>
              <p>B+</p>
            </div>
            <div className={styles.boxRow}>
              <p>Height</p>
              <p>170cm</p>
            </div>
            <div className={styles.boxRow}>
              <p>Weight</p>
              <p>70Kg</p>
            </div>
          </div>
          <p className={styles.daily}>Daily Dose</p>

          <div className={styles.medicineRow}>
            <div className={styles.circle}></div>
            <p className={styles.randoText}>Zenoxa</p>
            <div className={styles.spacer}></div>
            <p className={styles.randoText}>150mg</p>
          </div>
          <div className={styles.medicineRow1}>
            <div className={styles.circle}></div>
            <p className={styles.randoText}>Banzel</p>
            <div className={styles.spacer}></div>
            <p className={styles.randoText}>50mg</p>
          </div>
          <div className={styles.text3}>2 times a day after food</div>
        </div>
      </div>
      <Image src={avatar} alt={"avatar"} className={styles.image} />
    </div>
  );
}
