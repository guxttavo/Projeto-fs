import React from 'react';

import './styles.css'

interface Props {
  text: string;
}


export const Button: React.FC<Props> = ({text}) => {
  return(
    <button type="submit" className="btn">{text}</button>
    
  )
}