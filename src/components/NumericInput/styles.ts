import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #000;
`

export const Text = styled.span`
  color: #555;
  font-size: 1.5rem;
`

export const Value = styled.span`
  font-size: 6rem;
`

export const Buttons = styled.div`
  display: flex;
  gap: 2px;

  button {
    padding: 5px 0;
    width: 30px;
  }
`
