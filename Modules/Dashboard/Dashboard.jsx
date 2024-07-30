import styles from "./Dashboard.module.css";
import Image from "next/image";
import data from "/public/dashboard/data.png";
import Profile from "../../Components/Profile/Profile";
export default function DashboardModule() {
  return (
    <div className={styles.main}>
      <div className={styles.headText}>
        <p className={styles.company}>LifeLift</p>
        <p className={styles.title}>Dashboard</p>
      </div>
      <div className={styles.content}>
        <div className={styles.leftcol}>
          <h2 className={styles.colHead}>Health Average</h2>
          <Image src={data} alt={"data pic"} className={styles.dataImg} />
          <h3 className={styles.text}>
            {`Data fetched by Narender's LifeLift Ring`}
          </h3>
          <h3 className={styles.appointments}>No upcoming appointments ! </h3>
          <button className={styles.btn}>Connect Health Device</button>
        </div>
        <div className={styles.spacer}></div>
        <Profile />
      </div>
    </div>
  );
}
