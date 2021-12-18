import styled, { css } from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Lid = styled.div`
  width: 100px;
  height: 25px;
  background-color: #7aa944;
`
export const Body = styled.div`
  width: 90px;
  height: 60px;
  background-color: #5c7e32;
`

const ribbonCommons = css`
  position: absolute;
  background-color: #ce1e1e;
`
export const VerticalRibbon = styled.div`
  ${ribbonCommons}
  position: absolute;
  width: 15px;
  height: 85px;
`

export const HorizontalRibbon = styled.div`
  ${ribbonCommons}
  top: 40px;
  height: 15px;
  width: 90px;
`
