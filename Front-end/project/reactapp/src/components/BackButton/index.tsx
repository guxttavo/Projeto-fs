import React from 'react';
import './styles.css'
import { FiArrowLeft } from 'react-icons/fi';

export function BackButton() {
  return (
    <div  id="back-button-container">
      <FiArrowLeft/>
      <div>
        <p className="back-button-text">Voltar</p>
      </div>
    </div>

    
  )
}
