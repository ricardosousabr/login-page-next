import Image from 'next/image'
import Form from '@/src/components/Form'

export default function Login() {
  return (
    <div>
      <div>
        <Image src="/img/logo.png" alt="" width={218} height={60} />
      </div>
      <div>
        <h1>Login into your account</h1>
      </div>
      <div>
        <Form />
      </div>
    </div>
  )
}
