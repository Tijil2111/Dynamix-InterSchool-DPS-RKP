import styles from "./Workshops.module.css";
import Image from "next/image";
import workshop1 from "/public/workshops/workshop1.png";
import workshop2 from "/public/workshops/workshop2.png";
import workshop3 from "/public/workshops/workshop3.png";
export default function WorkShopModule() {
  return (
    <div className={styles.main}>
      <div className={styles.mainText}>
        <p className={styles.company}>LifeLift</p>
        <p className={styles.title}>
          Our <span className={styles.span}> Workshops. </span>
        </p>
        <div className={styles.underline}></div>
        <div className={styles.row}>
          <div className={styles.card1}>
            <Image
              src={workshop2}
              alt={"workshop 2"}
              className={styles.image1}
            />
            <div className={styles.textCont1}>
              <p className={styles.contHead1}>Workshop Inaar</p>
              <p className={styles.contdate1}>Friday 13, 2024</p>
            </div>
          </div>
          <div className={styles.card}>
            <Image
              src={workshop1}
              alt={"workshop 1"}
              className={styles.image}
            />
            <div className={styles.textCont}>
              <p className={styles.contHead}>Workshop Inaar</p>
              <p className={styles.contdate}>Friday 13, 2024</p>
              <p className={styles.contPara1}>
                At the musical workshop for seniors, participants immersed
                themselves in the soothing world of music therapy. Through
                gentle rhythms and harmonious melodies, they explored creative
                expression, enhanced memory recall, and experienced emotional
                healing. The session fostered connection and joy, providing a
                refreshing and uplifting outlet for creativity and well-being.
              </p>
            </div>
          </div>
          <div className={styles.card1}>
            <Image
              src={workshop3}
              alt={"workshop 3"}
              className={styles.image1}
            />
            <div className={styles.textCont1}>
              <p className={styles.contHead1}>Workshop Iktara</p>
              <p className={styles.contdate1}>Friday 13, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
