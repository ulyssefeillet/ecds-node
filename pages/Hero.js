import styles from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <div className={`${styles.heroWrapper} center`}>
      <div className={`${styles.heroInner}`}>
        <h2 className={styles.headerText}>
          Order groceries for delivery or pickup today
        </h2>
        <div className={styles.slogan}>
          <p>Whatever you want from local stores, brought right to your door</p>
        </div>
      </div>
      <div className={styles.heroImage}>
        <img
          src="https://media.istockphoto.com/id/1287018959/vector/great-japan-wave-ocean-oriental-style-vector.jpg?s=612x612&w=0&k=20&c=zdC9QZ4q138SOhMOpmIHtOTKOxwLkcXpsvYyaGWjfjM="
          alt=""
        />
      </div>
    </div>
  );
};
export default Hero;