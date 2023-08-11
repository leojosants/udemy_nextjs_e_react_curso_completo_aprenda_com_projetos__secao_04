import styles from '../styles/Card.module.css'
import { CardProps } from './interfaces/cardProps'

export default function Card(props: CardProps) {
  return (
    <div
      className={styles.card}
      style={{ backgroundColor: props.bgColor ?? '#fff' }}
    >
      {props.children}
    </div>
  )
}