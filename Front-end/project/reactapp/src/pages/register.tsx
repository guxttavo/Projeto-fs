import '../components/GlobalStyles/global.css'
import { RegisterLayout } from '../components/Layouts/RegisterLayout/register-layout'
import { Input } from '../components/Input'
import { InputCpfMask } from '../components/InputMask'

import { Button } from '../components/Button'
import { AiOutlineLock, AiOutlineUser, AiOutlineIdcard } from 'react-icons/ai'
import { MdOutlineEmail } from 'react-icons/md'
import { BiBookBookmark } from 'react-icons/bi'

function RegisterPage() {
  function onSubmit(ev: any) {
    const dadosDoForm = new FormData(ev.target)

    console.log(ev.target)

    ev.preventDefault()

    console.log(dadosDoForm.get('username'))

    const values = {
      name: dadosDoForm.get('name'),
      course: dadosDoForm.get('course'),
      email: dadosDoForm.get('email'),
      cpf: dadosDoForm.get('cpf'),
      password: dadosDoForm.get('password')
    }

    console.log('data', values)

    fetch('http://127.0.0.1:8000/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(values)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }
  return (
    <div>
      <RegisterLayout>
        <div id="text-container">
          <p className="text">Cadastrar</p>
          <p className="subt">
            Já possui uma conta? <span>Entrar</span>
          </p>
        </div>
        <form className="form" onSubmit={onSubmit}>
          <Input
            type="text"
            label="Nome completo"
            name="name"
            icon={AiOutlineUser}
          />
          <Input
            type="text"
            label="Curso Vinculado"
            name="course"
            icon={BiBookBookmark}
          />

          <Input
            id="email"
            type="email"
            label="Email institucional"
            name="email"
            icon={MdOutlineEmail}
          />

          <InputCpfMask label="CPF" icon={AiOutlineIdcard} />
          <Input
            type="password"
            label="Senha"
            name="password"
            icon={AiOutlineLock}
          />
          <Button text="Cadastrar" />
        </form>
      </RegisterLayout>
    </div>
  )
}

export default RegisterPage
