import React, { useState, useEffect } from 'react'
import type { NextPage } from 'next'
import Link from 'next/link'

import { useGame } from '../contexts/game'
import { Card, Form, StartGameButton } from '../styles/pages/home'
import NumericInput from '../components/NumericInput'

const Home: NextPage = () => {
  const { createDoors } = useGame()

  const [doorsAmount, setDoorsAmount] = useState(1)
  const [choosenDoor, setChoosenDoor] = useState(1)

  useEffect(() => {
    if (choosenDoor > doorsAmount) setChoosenDoor(doorsAmount)
  }, [doorsAmount, choosenDoor])

  const handleInitGame = () => createDoors(doorsAmount, choosenDoor)

  return (
    <Form>
      <div>
        <Card backgroundColor="#c0392c">
          <h1>Monty Hall</h1>
        </Card>

        <Card>
          <NumericInput
            text="Qtde de portas"
            value={doorsAmount}
            onChange={amount => setDoorsAmount(amount)}
          />
        </Card>
      </div>

      <div>
        <Card>
          <NumericInput
            text="Com presente"
            value={choosenDoor}
            onChange={doorNumber => setChoosenDoor(doorNumber)}
            canIncrement={choosenDoor < doorsAmount}
          />
        </Card>

        <Card backgroundColor="#28a085">
          <Link href="/game">
            <StartGameButton onClick={handleInitGame}>
              Iniciar jogo
            </StartGameButton>
          </Link>
        </Card>
      </div>
    </Form>
  )
}

export default Home
