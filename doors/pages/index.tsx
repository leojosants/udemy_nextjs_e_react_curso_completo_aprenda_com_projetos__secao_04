import styles from '../styles/Form.module.css'
import Card from '../components/Card'
import Link from 'next/link'
import NumberInput from '../components/NumberInput'
import { useState } from 'react'

export default function Form() {
  const [qtdDoors, setQtdDoors] = useState(3);
  const [withGift, setWithGift] = useState(1);

  return (
    <div className={styles.form}>
      <div>
        <Card bgColor='#C0392C'>
          <h1>Monty Hall</h1>
        </Card>

        <Card>
          <NumberInput
            min={3}
            max={100}
            text='Number of Doors?'
            value={qtdDoors}
            onChange={newQtd => setQtdDoors(newQtd)}
          />
        </Card>
      </div>

      <div>
        <Card>
          <NumberInput
            min={1}
            max={100}
            text='Gift door??'
            value={withGift}
            onChange={newDoorWithGift => setWithGift(newDoorWithGift)}
          />
        </Card>

        <Card bgColor='#28A085'>
          <Link
            href={`/game/${qtdDoors}/${withGift}`}
            style={{ flex: '1', margin: 'auto' }}>
            <h2 className={styles.link}>
              Start
            </h2>
          </Link>
        </Card>
      </div>
    </div>
  )
}
