import styles from "./Shop.module.css";
import Image from "next/image";
import ring from "/public/shop/ring.png";
export default function ShopModule() {
  return (
    <div className={styles.main}>
      <div className={styles.headText}>
        <p className={styles.company}>LifeLift</p>
        <p className={styles.title}>
          The LifeLift <span className={styles.span}>Ring</span>
        </p>
      </div>
      <div className={styles.mainContent}>
        <div>
          <div className={styles.para}>
            {`The LifeLift Ring is more than just a fitness tracker; it’s a
          comprehensive health companion designed to support seniors in
          maintaining an active and healthy lifestyle. Its advanced features,
          combined with the user-friendly Lifelift website, provide an
          unparalleled level of care and convenience. Whether you’re looking to
          stay on top of your fitness goals, monitor your heart health, or
          ensure you’re getting quality sleep, the LifeLift Ring is here to help
          you every step of the way. Join the Lifelift community today and
          experience the difference with the LifeLift Ring. Empower yourself
          with the tools you need to live a healthier, more connected life.
          Welcome to the future of senior health and well-being. Welcome to
          LifeLift.`}
          </div>
          <button className={styles.btn}>Order Now</button>
        </div>
        <div className={styles.spacer}></div>
        <div className={styles.imagecont}>
          <Image src={ring} alt={"ring png"} />
          <p className={styles.cost}>RS 5,000</p>
        </div>
      </div>
    </div>
  );
}
