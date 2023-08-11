import styles from '../../../styles/Game.module.css'
import { useState, useEffect } from 'react'
import { createDoors, updateDoors } from '../../../functions/doors'
import { useRouter } from 'next/router'
import Door from '../../../components/Door'
import Link from 'next/link'

export default function game() {
  const router = useRouter();

  const [valid, setValid] = useState(false);
  const [doors, setDoors] = useState([]);

  useEffect(() => {
    const doors = +router.query.doors;
    const haveGift = +router.query.haveGift;
    const qtdDoorsValid = doors >= 3 && doors <= 100;
    const haveGiftValid = haveGift >= 1 && haveGift <= doors;
    setValid(qtdDoorsValid && haveGiftValid)
  }, [doors])

  useEffect(() => {
    const doors = +router.query.doors;
    const haveGift = +router.query.haveGift;
    setDoors(createDoors(doors, haveGift))
  }, [router?.query])


  function renderDoor() {
    return doors.map(door => {
      return (
        <Door
          key={door.number}
          value={door}
          onChange={newDoor => setDoors(updateDoors(doors, newDoor))}
        />
      )
    })
  }

  return (
    <div id={styles.game}>
      <div className={styles.doors}>
        {valid ?
          renderDoor() : <h1>Invalid values!</h1>}
      </div>
      <div className={styles.buttons}>
        <Link href='/'>
          <button>Restart GAME</button>
        </Link>
      </div>
    </div>
  )
}