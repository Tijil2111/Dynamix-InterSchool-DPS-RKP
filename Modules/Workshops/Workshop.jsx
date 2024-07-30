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
              <p className={styles.contPara1}>
                it is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal{" "}
              </p>
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
              <p className={styles.contPara}>
                it is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal{" "}
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
              <p className={styles.contPara1}>
                it is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
