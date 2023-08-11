import styles from '../styles/Door.module.css'
import Gift from '../components/Gift'
import { DoorProps } from './interfaces/DoorProps'

export default function Door(props: DoorProps) {
  const door = props.value;
  const selected = door.selected && !door.opened ? styles.door_selected : '';

  const toggleSelection = (e) => {
    props.onChange(door.toggleSelection());
  }

  const open = (e) => {
    e.stopPropagation()
    props.onChange(door.open());
  }

  function renderDoor() {
    return (
      <div className={styles.door}>
        <div className={styles.number}>
          {door.number}
        </div>
        <div
          className={styles.door_handle}
          onClick={open}
        ></div>
      </div>
    )
  }

  return (
    <div className={styles.area} onClick={toggleSelection}>
      <div className={`${styles.structure_portal} ${selected}`}>
        {
          door.closed ?
            renderDoor() : door.haveGift ? <Gift /> : false
        }
      </div>
      <div className={styles.floor}></div>
    </div>
  )
}