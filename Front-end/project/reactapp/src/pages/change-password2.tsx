import React from 'react';
import '../components/GlobalStyles/global.css'
import { LoginLayout } from '../components/Layouts/LoginLayout/login-layout'
import { Input } from '../components/Input'
import { BackButton } from '../components/BackButton'

import { Button } from '../components/Button'
import {AiOutlineLock} from 'react-icons/ai'



function ChangePassword2() {
  return (
    <div>
       <LoginLayout>
        <div id="text-container">
          <BackButton/>
          <p className="text">Alterar senha</p>
          <p className="subt">Crie uma senha forte e segura</p>
        </div>
        <Input type="password" label="Nova Senha" icon={AiOutlineLock}/>
        <Input type="password" label="Cofirmação de Senha" icon={AiOutlineLock}/>
           
        <Button text="Redefinir senha"/>
      </LoginLayout> 
    </div>
  )
}

export default ChangePassword2;
