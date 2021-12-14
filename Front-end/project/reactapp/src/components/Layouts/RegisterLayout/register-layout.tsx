import React from 'react';
import image from './register.svg'
import logoUnipe from './logounipe.png'
import './styles.css'
interface Props {
  
}
export const RegisterLayout: React.FC<Props> = ({children}) =>{
  return(
    

    <div className="container-register">
      <section className="first-section-register">
      <div id="all">
      
        <div className="image-container-register">
          <img className="logo-register" src={logoUnipe} alt="" />
          <a href="https://www.freepik.com/vectors/people"></a>
          <img  className="image-register" src={image} alt="People vector created by stories - www.freepik.com" />
          <p className="title-register">Plataforma de Formação <br/> Continuada</p>
          <p className="subtitle-register">Lorem Ipsum is simply dummy text of the printing a industry.</p>
        </div>
      </div>
      </section>
      <section className="second-section-register">
        {children}
      </section>
    </div>
    
  )
}