import React from 'react';
import '../components/GlobalStyles/global.css'
import { Input } from '../components/Input'
import { Checkbox } from '../components/Checkbox'
import { Button } from '../components/Button'
import {AiOutlineLock} from 'react-icons/ai'
import { MdOutlineEmail } from 'react-icons/md';
import { LoginLayout } from '../components/Layouts/LoginLayout/login-layout'


function LoginPage() {
  return (
    <div>
       <LoginLayout>
        <div id="text-container">
          <p className="text">Entrar</p>
          <p className="subt">Não possui uma conta? <span>Criar uma conta</span></p>
        </div>
        <Input type="text" label="Email institucional" icon={MdOutlineEmail}/>
        <Input type="password" label="Senha" icon={AiOutlineLock}/>
        <Checkbox/>    
        <Button text="Entrar"/>
      </LoginLayout> 
    </div>
  )
}

export default LoginPage;
