import React, { createContext, useContext, useState } from 'react'
import { IDoor } from '../types/Door'

type GameData = {
  doors: IDoor[]
  createDoors: (doorsAmount: number, choosenDoor: number) => void
  selectedDoor: number | undefined
  setSelectedDoor: React.Dispatch<React.SetStateAction<number | undefined>>
}

const GameContext = createContext({} as GameData)

export const GameProvider: React.FC = ({ children }) => {
  const [doors, setDoors] = useState<IDoor[]>([])
  const [selectedDoor, setSelectedDoor] = useState<number>()

  const createDoors = (doorsAmount: number, choosenDoor: number) => {
    const doors: IDoor[] = []

    for (let i = 0; i < doorsAmount; i++) {
      const doorNumber = i + 1
      doors[i] = { doorNumber, hasGift: doorNumber === choosenDoor }
    }

    setDoors(doors)
    setSelectedDoor(undefined)
  }

  return (
    <GameContext.Provider
      value={{
        doors,
        createDoors,
        selectedDoor,
        setSelectedDoor
      }}
    >
      {children}
    </GameContext.Provider>
  )
}

export const useGame = () => useContext(GameContext)
