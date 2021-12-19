import React from 'react'
import { Buttons, Container, Text, Value } from './styles'

interface INumericInputProps {
  text: string
  value: number
  canIncrement?: boolean
  onChange: (value: number) => void
}

const NumericInput: React.FC<INumericInputProps> = ({
  text,
  value,
  canIncrement = true,
  onChange
}) => {
  const canDecrement = value - 1 > 0

  const handleIncrement = () => canIncrement && onChange(value + 1)
  const handleDecrement = () => canDecrement && onChange(value - 1)

  return (
    <Container>
      <Text>{text}</Text>
      <Value>{value}</Value>
      <Buttons>
        <button onClick={handleDecrement} disabled={!canDecrement}>
          -
        </button>
        <button onClick={handleIncrement} disabled={!canIncrement}>
          +
        </button>
      </Buttons>
    </Container>
  )
}

export default NumericInput
