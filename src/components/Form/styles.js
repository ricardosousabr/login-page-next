import styled from 'styled-components'
import colors from '../../tokens/colors.js'
import screens from '../../tokens/screen.js'

export const Text = styled.p`
  color: ${colors.gray};
`

export const ContainerForm = styled.form`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  height: 150px;

  @media (min-width: ${screens.medium}) {
    background: red;
  }
`

export const BoxInput = styled.div`
  width: 250px;
  display: flex;
  align-items: center;
`

export const InputLogin = styled.input`
  background: ${colors.white};
  width: 190px;
  height: 30px;
  border-radius: 6px;
  border: none;
`
