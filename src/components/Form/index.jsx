import colors from '../../tokens/colors.js'
import Image from 'next/image'
import Button from '../Button/index.jsx'
import {
  Cointainer,
  InputLogin,
  Text,
  ContainerForm,
  BoxInput,
  BoxHorizontalLine,
  HorizontalLine,
} from './styles'

export default function Form() {
  console.log(colors.grayy)

  return (
    <Cointainer>
      <div>
        <ContainerForm>
          <div>
            <div>
              <Text>Email Address</Text>
            </div>
            <BoxInput>
              <InputLogin type="text" placeholder="your@email.com" />
              <Image src="/img/email-img.png" alt="" width={70} height={50} />
            </BoxInput>
          </div>
          <div>
            <div>
              <Text>Password</Text>
            </div>
            <BoxInput>
              <InputLogin type="text" placeholder="Enter your password" />
              <Image
                src="/img/password-img.png"
                alt=""
                width={70}
                height={50}
              />
            </BoxInput>
          </div>
          <div>
            <Button>Login Now</Button>
          </div>
        </ContainerForm>
      </div>
      <BoxHorizontalLine>
        <HorizontalLine></HorizontalLine>
        <div>
          <Text>OR</Text>
        </div>
        <HorizontalLine></HorizontalLine>
      </BoxHorizontalLine>
      <div>
        <Button>Login Now</Button>
      </div>
    </Cointainer>
  )
}
