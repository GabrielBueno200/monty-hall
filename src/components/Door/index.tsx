import React from 'react'
import { Body, Container, Floor, Handle, Number, Structure } from './styles'

const Door: React.FC = () => {
  return (
    <Container isSelected={false}>
      <Structure>
        <Body>
          <Number>0</Number>
          <Handle />
        </Body>
      </Structure>

      <Floor />
    </Container>
  )
}

export default Door
