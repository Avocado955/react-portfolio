import styles from "./AboutMe.module.scss";

const AboutMe = () => {
  return (
    <div className={styles.aboutMe}>
      <h2>About Me</h2>
      <div className={styles.row}>
        <img src="" alt="Marcus" />
        <div className={styles.textArea}>
          <p>I'm Marcus, a full-stack developer based Wagga Wagga. I love online gaming and learning all about the lastest games and VR tech.</p>
          <p>Outside of coding i love spending time with my Wife and Son, family board games night or watching TV shows.</p>
        </div>
        <div>
          <h4>Get In Touch</h4>
          <div>
            <a className={styles.links} href="https://github.com/Avocado955">@Avocado955</a>
            <a className={styles.links} href="https://www.linkedin.com/in/marcus-ellis955/">Marcus Ellis</a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AboutMe