import Form from '@/src/components/Atoms/Form'
import {
  Container,
  ContainerItens,
  BoxImageBackground,
  ImageBackground,
  Title,
  ImageLogo,
  BoxImageLogo,
  BoxTitle,
} from './styles'

export default function Login() {
  return (
    <Container>
      <ContainerItens>
        <BoxImageLogo>
          <ImageLogo src="./img/logo.png" alt="" width={218} height={60} />
        </BoxImageLogo>
        <BoxTitle>
          <Title>Login into your account</Title>
        </BoxTitle>
        <div>
          <Form />
        </div>
      </ContainerItens>
      <BoxImageBackground>
        <ImageBackground
          src="./img/background-img.png"
          alt=""
          width={1248}
          height={1000}
        />
      </BoxImageBackground>
    </Container>
  )
}
