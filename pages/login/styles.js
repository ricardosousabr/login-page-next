import styled from 'styled-components'
import Image from 'next/image'
import screens from '../../src/tokens/screen'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;

  @media (min-width: ${screens.medium}) {
    flex-direction: row;
  }
`
export const ContainerItens = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-left: 50px;
  margin-right: 50px;
`

export const BoxImageBackground = styled.div`
  width: 1248px;
  height: 1000px;
  display: none;

  @media (min-width: ${screens.medium}) {
    display: block;
    width: 100%;
    height: 100vh;
  }
`

export const ImageBackground = styled(Image)`
  @media (min-width: ${screens.medium}) {
    width: 100%;
    height: 100vh;
  }

  @media (min-width: ${screens.large}) {
    width: 100%;
    height: 100vh;
  }
`

export const BoxTitle = styled.div`
  margin-bottom: 20px;
`

export const Title = styled.h1`
  font-size: 20px;

  @media (min-width: ${screens.small}) {
    font-size: 25px;
  }
`

export const BoxImageLogo = styled.div`
  margin-bottom: 20px;
`

export const ImageLogo = styled(Image)`
  width: 180px;
  height: 50px;

  @media (min-width: ${screens.small}) {
    width: 190px;
    height: 60px;
  }
`
