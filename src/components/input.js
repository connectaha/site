import styled from 'styled-components'
import { borders, fontSize, space, width } from 'styled-system'

const Input = styled.input`
  border-radius: 4px;
  color: black;
  vertical-align: middle;
  outline: none;
  flex-grow: 1;
  ${borders};
  ${fontSize};
  ${space};
  ${width};
`

Input.defaultProps = {
  border: 0,
  fontSize: 4,
  linHeight: 4,
}

export default Input;