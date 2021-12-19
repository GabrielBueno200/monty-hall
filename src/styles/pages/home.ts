import styled from 'styled-components'

interface ICardProps {
  backgroundColor?: string
}

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  div {
    display: flex;
  }
`
export const Card = styled.div<ICardProps>`
  display: flex;
  width: 300px;
  height: 300px;
  background-color: ${props => props.backgroundColor ?? '#fff'};
  color: #fff;
  font-size: 2rem;
  padding: 15px;
  margin: 3px;
`

export const StartGameButton = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  margin: 0;
  cursor: pointer;
`
