"use client";
import styles from "./LearnMore.module.css";
import Image from "next/image";
import img1 from "/public/learn/img1.png";
import img2 from "/public/learn/img2.png";
import { Book, ThumbsUp } from "@phosphor-icons/react";
export default function LearnMoreModule() {
  return (
    <div className={styles.main}>
      <div className={styles.headText}>
        <p className={styles.company}>LifeLift</p>
        <p className={styles.title}>
          <span className={styles.span}> Learn</span> More
        </p>
      </div>
      <div className={styles.row}>
        <div className={styles.card}>
          <Image src={img1} alt="img1" />
          <div className={styles.container}>
            <Book size={64} weight="fill" className={styles.icon} />
            <p className={styles.cardTitle}>Social Wellness</p>
            <p className={styles.cardSubTitle}>by Dr. John Watson</p>
          </div>
        </div>
        <div className={styles.card}>
          <Image src={img2} alt="img2" />
          <div className={styles.container}>
            <ThumbsUp size={64} weight="fill" className={styles.icon} />
            <p className={styles.cardTitle}>Spiritual Wellness</p>
            <p className={styles.cardSubTitle}>by Dr. Anjana Gupta</p>
          </div>
        </div>
      </div>
    </div>
  );
}
