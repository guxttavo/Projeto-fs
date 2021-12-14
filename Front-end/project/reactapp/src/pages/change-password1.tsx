import React from 'react';
import '../components/GlobalStyles/global.css'
import { RegisterLayout } from '../components/Layouts/RegisterLayout/register-layout'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { BackButton } from '../components/BackButton'
import { MdOutlineEmail } from 'react-icons/md';



function ChangePassword1() {
  return (
    <div>
       <RegisterLayout>
        <div id="text-container">
          <BackButton/> 
          <p className="text">Alterar senha</p>
          <p className="subt">Insira o e-mail associoado a sua conta e enviaremos um e-mail com instruções para redefinir sua senha</p>
        </div>
        <Input type="text" label="Email Institucional" icon={MdOutlineEmail}/>
        
           
        <Button text="Próximo"/>
      </RegisterLayout> 
    </div>
  )
}

export default ChangePassword1;
