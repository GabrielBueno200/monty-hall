import React, { useState, MouseEvent } from 'react'
import { useGame } from '../../contexts/game'
import Gift from '../Gift'
import { Body, Container, Floor, Handle, Number, Structure } from './styles'

interface IDoorProps {
  doorNumber: number
  hasGift: boolean
}

const Door: React.FC<IDoorProps> = ({ doorNumber, hasGift }) => {
  const { selectedDoor, setSelectedDoor } = useGame()

  const [isOpen, setIsOpen] = useState(false)

  const isSelected = doorNumber === selectedDoor

  const handleOpenDoor = (e: MouseEvent) => {
    e.stopPropagation()
    setIsOpen(true)
  }

  return (
    <Container
      isSelected={isSelected}
      isOpen={isOpen}
      onClick={() => setSelectedDoor(doorNumber)}
    >
      <Structure className="structure">
        {!isOpen ? (
          <Body className="body">
            <Number className="number">{doorNumber}</Number>
            <Handle className="handle" onClick={handleOpenDoor} />
          </Body>
        ) : (
          hasGift && <Gift />
        )}
      </Structure>

      <Floor />
    </Container>
  )
}

export default Door
