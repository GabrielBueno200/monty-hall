import styled from 'styled-components'

interface IContainerProps {
  isSelected: boolean
  isOpen: boolean
}

const selectedColor = '#b79c14'

export const Container = styled.div<IContainerProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 310px;
  margin: 5px;

  .structure {
    border: 5px solid
      ${props => (!props.isSelected ? '#300808' : selectedColor)};
    border-bottom: none;

    .body {
      display: ${props => (!props.isOpen ? 'flex' : 'none')};

      .number {
        color: ${props => (!props.isSelected ? '#ddd' : selectedColor)};
      }

      .handle {
        background-color: ${props =>
          !props.isSelected ? '#300808' : selectedColor};
      }
    }
  }
`

export const Structure = styled.div`
  display: flex;
  flex-direction: column-reverse;
  flex: 1;
  width: 90%;
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  background-color: #4f2828;
  padding: 15px;
`

export const Number = styled.h1`
  font-size: 3rem;
`

export const Handle = styled.div`
  position: absolute;
  top: 50%;
  height: 20px;
  width: 20px;
  align-self: flex-start;
  border-radius: 10px;
  transform: translateY(-50%);
`

export const Floor = styled.div`
  height: 10px;
  width: 100%;
  background-color: #ddd;
`
