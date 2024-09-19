import styles from "./Title.module.scss";

const Title = () => {
  return (
    <div className={styles.title}>
      <h1 className={styles.name}>Marcus Ellis</h1>
      <h4 className={styles.subText}>Junior Software Engineer</h4>
    </div>
  )
}
export default Title