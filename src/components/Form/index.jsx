import Image from 'next/image'
import Button from '../Button/index.jsx'

import { useState } from 'react'
import { initializeApp } from 'firebase/app'
import { getDatabase, ref, set, child, get } from 'firebase/database'
import firebaseConfig from '../../../firebase/config.js'

import {
  Container,
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
  const [emailUser, setEmailUser] = useState('')
  const [passwordUser, setPasswordUser] = useState('')

  function resetInput() {
    setEmailUser('')
    setPasswordUser('')
    console.log(emailUser)
  }

  function sendData() {
    const randomId = Math.floor(Math.random() * 20)
    if (emailUser != '' || passwordUser != '') {
      set(ref(database, 'users/' + randomId), {
        email: emailUser,
        password: passwordUser,
      })
    } else {
      alert('Preencha todos os campos')
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    sendData()
    resetInput()
    console.log('sexoooo')
  }

  function verifyUser() {
    const dbRef = ref(getDatabase())
    get(child(dbRef, `users/`))
      .then((snapshot) => {
        console.log(snapshot.val())
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <Container>
      <div>
        <ContainerForm onSubmit={handleSubmit}>
          <div>
            <div>
              <Text>Email Address</Text>
            </div>
            <BoxInput>
              <InputLogin
                type="text"
                value={emailUser}
                placeholder="your@email.com"
                onChange={(e) => {
                  setEmailUser(e.target.value)
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
              <InputLogin
                type="text"
                value={passwordUser}
                placeholder="Enter your password"
                onChange={(e) => {
                  setPasswordUser(e.target.value)
                }}
              />
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
    </Container>
  )
}
