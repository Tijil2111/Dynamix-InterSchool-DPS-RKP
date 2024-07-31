import styles from "./Doctors.module.css";
import Image from "next/image";
import doctor1 from "/public/doctor/jane.png";
import doctor2 from "/public/doctor/naseem.png";
import doctor3 from "/public/doctor/manish.png";
import Link from "next/link";
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
          <Image
            src={doctor1}
            alt={"doctor 1 png"}
            height={350}
            className={styles.cardImage}
          />
          <p className={styles.cardTitle}>Dr. Jane Doe</p>
          <p className={styles.cardSubtitle}>General Physician - Age: 27</p>
          <p className={styles.cardSubtitle2}>
            <span className={styles.span}>Availability </span> Free
          </p>
          <Link href="/booked">
            <button className={styles.btn}>Book Now</button>
          </Link>
        </div>
        <div className={styles.card}>
          <Image
            src={doctor2}
            alt={"doctor 2 png"}
            height={350}
            className={styles.cardImage}
          />
          <p className={styles.cardTitle}>Dr. Naseem</p>
          <p className={styles.cardSubtitle}>Orthopedic - Age: 42</p>

          <p className={styles.cardSubtitle2}>
            <span className={styles.span}>Availability </span> Busy
          </p>
          <p className={styles.cardSubtitle3}>
            <span className={styles.span}>Can not be booked currently </span>{" "}
          </p>
        </div>
        <div className={styles.card}>
          <Image
            src={doctor3}
            alt={"doctor 3 png"}
            height={350}
            className={styles.cardImage}
          />
          <p className={styles.cardTitle}>Dr. Manish</p>
          <p className={styles.cardSubtitle}>Dentist - Age: 52</p>
          <p className={styles.cardSubtitle2}>
            <span className={styles.span}>Availability </span> Free
          </p>
          <Link href="/booked">
            <button className={styles.btn}>Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
