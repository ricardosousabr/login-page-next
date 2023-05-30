import Image from 'next/image'
import Button from '../Button/index.jsx'

import { useState } from 'react'
import { initializeApp } from 'firebase/app'
import { getDatabase, ref, set } from 'firebase/database'
import firebaseConfig from '../../../firebase/config.js'

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
  const app = initializeApp(firebaseConfig)
  const database = getDatabase()

  function sendData(e) {
    e.preventDefault()
    set(ref(database, 'users/' + 1), {
      name: 'Ricardo',
    })
  }

  return (
    <Cointainer>
      <div>
        <ContainerForm onSubmit={sendData}>
          <div>
            <div>
              <Text>Email Address</Text>
            </div>
            <BoxInput>
              <InputLogin
                type="text"
                placeholder="your@email.com"
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
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
        <Button>Signup Now</Button>
      </div>
    </Cointainer>
  )
}
