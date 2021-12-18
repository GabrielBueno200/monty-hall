import React from 'react'
import {
  Body,
  Container,
  HorizontalRibbon,
  Lid,
  VerticalRibbon
} from './styles'

const Gift: React.FC = () => {
  return (
    <Container>
      <Lid />
      <Body />
      <VerticalRibbon />
      <HorizontalRibbon />
    </Container>
  )
}

export default Gift
