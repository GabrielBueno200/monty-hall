import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { Container, Doors } from '../styles/pages/game'
import { useGame } from '../contexts/game'
import Door from '../components/Door'

const Game: NextPage = () => {
  const { doors } = useGame()

  return (
    <Container>
      <Doors>
        {doors.map((door, idx) => {
          return <Door {...door} key={idx} />
        })}
      </Doors>
    </Container>
  )
}

export default Game
