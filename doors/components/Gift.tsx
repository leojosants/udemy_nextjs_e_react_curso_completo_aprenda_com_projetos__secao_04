import styles from '../styles/Gift.module.css'

export default function Gift() {
  return (
    <div className={styles.box_gift}>
      <div className={styles.box_cover}></div>
      <div className={styles.box_body}></div>
      <div className={styles.ribbon_bow_1}></div>
      <div className={styles.ribbon_bow_2}></div>
    </div>
  )
}