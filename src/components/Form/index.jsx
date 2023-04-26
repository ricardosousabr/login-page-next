import colors from '../../tokens/colors.js'
import Image from 'next/image'
import { InputLogin, Text, ContainerForm, BoxInput } from './styles'

export default function Form() {
  console.log(colors.grayy)

  return (
    <div>
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
            <button>Login Now</button>
          </div>
        </ContainerForm>
      </div>
    </div>
  )
}
