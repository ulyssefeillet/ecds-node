import styles from "../styles/Hero.module.css"
import 'bootstrap/dist/css/bootstrap.min.css'

const Hero = () => {
  return (
    <div className={`${styles.heroWrapper} center`}>
      <div className={`${styles.heroInner}`}>
        <h2 className={styles.headerText}>
          ECDS
        </h2>
        <div className={styles.slogan}>
          <p></p>
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