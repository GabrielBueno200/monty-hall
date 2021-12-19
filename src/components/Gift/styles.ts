import styled, { css } from 'styled-components'

const lidHeight = 25
const boxHeight = 60
const giftHeight = lidHeight + boxHeight

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Lid = styled.div`
  width: 100px;
  height: ${lidHeight}px;
  background-color: #7aa944;
`
export const Box = styled.div`
  width: 90px;
  height: ${boxHeight}px;
  background-color: #5c7e32;
`

const ribbonCommons = css`
  position: absolute;
  background-color: #ce1e1e;
`
export const VerticalRibbon = styled.div`
  ${ribbonCommons}
  width: 15px;
  height: ${giftHeight}px;
`

export const HorizontalRibbon = styled.div`
  ${ribbonCommons}
  top: 40px;
  height: 15px;
  width: 90px;
`
