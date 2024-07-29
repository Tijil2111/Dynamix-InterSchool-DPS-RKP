import styles from "./Doctors.module.css";
import Image from "next/image";
import doctor1 from "/public/doctor/doctor1.png";
export default function DoctorsModule() {
  return (
    <div className={styles.main}>
      <div className={styles.headText}>
        <p className={styles.company}>LifeLift</p>
        <p className={styles.title}>
          Connect With <span className={styles.span}>Doctors.</span>
        </p>
      </div>
      <div className={styles.cardRow}>
        <div className={styles.card}>
          <Image src={doctor1} alt={"doctor 1 png"} height={350} />
          <p className={styles.cardTitle}>Dr. Jane Doe</p>
          <p className={styles.cardSubtitle}>Member since: 2020</p>
          <p className={styles.cardSubtitle1}>Age: 27</p>
          <p className={styles.cardSubtitle2}>
            <span className={styles.span}>Availability </span> Free
          </p>
          <button className={styles.btn}>Book Now</button>
        </div>
        <div className={styles.card}>
          <Image src={doctor1} alt={"doctor 1 png"} height={350} />
          <p className={styles.cardTitle}>Dr. Naseema</p>
          <p className={styles.cardSubtitle}>member since: 2023</p>
          <p className={styles.cardSubtitle1}>Age: 42</p>
          <p className={styles.cardSubtitle2}>
            <span className={styles.span}>Availability </span> Busy
          </p>
          <p className={styles.cardSubtitle3}>
            <span className={styles.span}>Can not be booked currently </span>{" "}
          </p>
        </div>
        <div className={styles.card}>
          <Image src={doctor1} alt={"doctor 1 png"} height={350} />
          <p className={styles.cardTitle}>Dr. Manish</p>
          <p className={styles.cardSubtitle}>member since: 2020</p>
          <p className={styles.cardSubtitle1}>Age: 52</p>
          <p className={styles.cardSubtitle2}>
            <span className={styles.span}>Availability </span> Free
          </p>
          <button className={styles.btn}>Book Now</button>
        </div>
      </div>
    </div>
  );
}
