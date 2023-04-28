import { ButtonForm } from './styles'

export default function Button(props) {
  return (
    <>
      <ButtonForm>{props.children}</ButtonForm>
    </>
  )
}
