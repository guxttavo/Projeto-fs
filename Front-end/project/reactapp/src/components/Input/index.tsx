import React, {HTMLProps} from 'react';
import { useState } from "react";
import './styles.css'
import { MdOutlineEmail } from 'react-icons/md';
import { IconType } from 'react-icons';


interface Props extends HTMLProps<HTMLInputElement>{
  icon?: IconType;
  label: string;
}

export const Input: React.FC<Props> = ({icon, label, ...rest}) =>{
  const [focus, setFocus] = useState(false);
  const Icon = icon; 
  return (
  <div id="input1">
    
    <label className="label">{ label }</label>
    <div className={!focus ? "input-container" : "input-container-focus"}>
      
       {Icon ? <Icon className={!focus ? "mail-icon" : "mail-icon-focus mail-icon"}/>  : <MdOutlineEmail />}
      
      <input onFocus={() => setFocus(true)} onBlur={() => setFocus(false) } 
      className={!focus ? "input" : "input input-focus"} {...rest}/>
    </div>
  </div>
  )
}
