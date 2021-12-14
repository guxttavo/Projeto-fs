import React from 'react';
import './styles.css'
import Image from './image.jpg'
import { FiLogIn } from 'react-icons/fi'

interface Props {
  title: string;
  name: string;
  amount?: string;
}

export const Card: React.FC<Props> = ({title, name, amount}) =>{
  return (
  <div id="card-container">
    <div className="testt">
      <img src={ Image } className="card-image" alt="" />
    </div>
    <div className="info-card">
      <p className="title-card">{ title }</p>
      <p className="name-card">{ name }</p>
      <p className="amount-card">Aulas: { amount }</p>
      <div className="button-container">
        <FiLogIn className="icon-button"/>
        <a className="btn-card">Ingressar</a>
      </div>
    </div>

  </div>
  )
}
