import styles from "./Booked.module.css";
import Image from "next/image";
import gif from "/public/check.gif";
export default function BookedModule() {
  return (
    <div className={styles.mainContent}>
      <div>
        <Image
          src={gif}
          alt="check gif"
          height={300}
          width={300}
          quality={100}
        />
      </div>
      <p className={styles.title}>Booking Confirmed</p>
      <p className={styles.subtitle}>
        An assistant will soon reach out to you in order to schedule the
        appointment at a time suitable for you.
      </p>
    </div>
  );
}
