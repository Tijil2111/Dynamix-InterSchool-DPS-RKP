import styles from "./About.module.css";

export default function AboutModule() {
  return (
    <div className={styles.main}>
      <div className={styles.headText}>
        <p className={styles.company}>LifeLift</p>
        <p className={styles.title}>About Us</p>
      </div>
      <div className={styles.text}>
        LifeLift offers a comprehensive solution designed to enrich the lives of
        seniors by addressing their physical, emotional, and social needs.
        Beyond providing exceptional medical care, we are committed to fostering
        a holistic approach to well-being. Our program empowers seniors to
        maintain strong connections with family and friends, while also offering
        essential counselling services to alleviate mental stress and emotional
        burdens. By considering every aspect of senior life, LifeLift is
        dedicated to improving overall health and quality of life.
      </div>
      <div className={styles.text}>
        We understand that the aging process can present unique challenges, and
        our goal is to provide seniors with the support and resources they need
        to thrive. Through our integrated care model, we offer a supportive
        community where seniors can access a range of services, including
        healthcare, social activities, and mental health support. Our
        experienced team of professionals is dedicated to creating a
        personalized care plan for each individual, ensuring that their specific
        needs and preferences are met.
      </div>
    </div>
  );
}
