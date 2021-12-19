import styled from 'styled-components'

interface ISelectionProps {
  isSelected: boolean
}

const selectedColor = '#b79c14'
const doorHeight = 310
const doorWidth = 200

export const Container = styled.div<ISelectionProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${doorWidth}px;
  height: ${doorHeight}px;
  margin: 5px;

  /* door */
  & div > div {
    border: 5px solid
      ${props => (!props.isSelected ? '#300808' : selectedColor)};

    /* number*/
    h1 {
      color: ${props => (!props.isSelected ? '#FFF' : selectedColor)};
    }

    /* handle */
    div {
      background-color: ${props =>
        !props.isSelected ? '#300808' : selectedColor};
    }
  }
`

export const Structure = styled.div`
  display: flex;
  flex: 1;
  width: 90%;
  border-bottom: none;
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 15px;
  background-color: #4f2828;
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
