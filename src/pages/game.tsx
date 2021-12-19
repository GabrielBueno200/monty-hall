import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { Container, Doors, RestartButton } from '../styles/pages/game'
import { useGame } from '../contexts/game'
import Door from '../components/Door'
import { useRouter } from 'next/router'

const Game: NextPage = () => {
  const router = useRouter()

  const { doors } = useGame()

  return (
    <Container>
      <Doors>
        {doors.map((door, idx) => (
          <Door {...door} key={idx} />
        ))}
      </Doors>

      <RestartButton onClick={() => router.push('/')}>
        Reiniciar jogo
      </RestartButton>
    </Container>
  )
}

export default Game
