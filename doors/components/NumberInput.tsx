import styles from '../styles/NumberInput.module.css'
import { NumberInputProps } from './interfaces/numberInputProps'

export default function NumberInput(props: NumberInputProps) {
  const decrement = () => {
    props.onChange(props.value > props.min ? props.value - 1 : props.value);
  }

  const increment = () => {
    props.onChange(props.value < props.max ? props.value + 1 : props.value);
  }

  return (
    <div className={styles.number_imput}>
      <span className={styles.text}>{props.text}</span>
      <span className={styles.value}>{props.value}</span>
      <div className={styles.buttons}>
        <button className={styles.btn} onClick={decrement}>-</button>
        <button className={styles.btn} onClick={increment}>+</button>
      </div>
    </div>
  )
}