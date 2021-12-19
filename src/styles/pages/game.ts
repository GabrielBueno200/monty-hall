import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const Doors = styled.div`
  display: flex;
  align-self: stretch;
  justify-content: space-around;
  flex-wrap: wrap;
`

export const RestartButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  background-color: #c0332c;
  color: #fff;
  font-size: 2rem;
  border: none;
  padding: 10px 25px;
  border-radius: 5px;
`
