import React from 'react';
import image from './login.svg'
import logoUnipe from './logounipe.png'
import './styles.css'
interface Props {
  
}
export const LoginLayout: React.FC<Props> = ({children}) =>{
  return(
    

    <div className="test">
      <section className="first-section">
      <div id="all">
      
        <div className="image-container">
          <img className="logo" src={logoUnipe} alt="" />
          <a href="https://www.freepik.com/vectors/people"></a>
          <img alt="People vector created by stories - www.freepik.com" className="image" src={image}  />
          <p className="title">Plataforma de Formação <br/> Continuada</p>
          <p className="subtitle">Lorem Ipsum is simply dummy text of the printing a industry.</p>
        </div>
      </div>
      </section>
      <section className="second-section">
        {children}
      </section>
    </div>
    
  )
}