import styled from 'styled-components'
import colors from '../../../tokens/colors.js'
import screens from '../../../tokens/screen.js'

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  height: 280px;
`

export const Text = styled.p`
  color: ${colors.gray};

  @media (min-width: ${screens.small}) {
    font-size: 18px;
  }
`

export const ContainerForm = styled.form`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  height: 150px;

  @media (min-width: ${screens.medium}) {
    background: white;
  }
`

export const BoxInput = styled.div`
  width: 260px;
  display: flex;
  align-items: center;

  @media (min-width: ${screens.small}) {
    width: 300px;
  }
`

export const InputLogin = styled.input`
  background: ${colors.white};
  width: 190px;
  height: 30px;
  border-radius: 5px;
  border: none;

  @media (min-width: ${screens.small}) {
    width: 220px;
  }
`

export const BoxHorizontalLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 190px;

  @media (min-width: ${screens.small}) {
    width: 220px;
  }
`

export const HorizontalLine = styled.div`
  width: 70px;
  height: 1px;
  border: 1px solid;
  border-color: ${colors.lightGray};

  @media (min-width: ${screens.small}) {
    width: 80px;
  }
`
