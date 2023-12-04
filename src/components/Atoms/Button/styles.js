import styled from 'styled-components'
import colors from '../../../tokens/colors.js'
import screens from '../../../tokens/screen.js'

export const ButtonForm = styled.button`
  background: ${colors.primary};
  border: none;
  color: white;
  width: 190px;
  height: 30px;
  border-radius: 5px;

  @media (min-width: ${screens.small}) {
    width: 220px;
  }
`
