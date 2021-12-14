import React from 'react';

import './styles.css'

export function Checkbox() {
  return(
    <div id="main">
      <div id="checkbox-container">
        <input type="checkbox" id="horns" name="horns"/>
        <label id="label">Manter conectado</label>
      </div>
        <a href="https:/www.google.com"className="forget-password">Esqueceu sua senha?</a>
    </div>
    
  )
}