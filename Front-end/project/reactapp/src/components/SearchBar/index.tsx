import React, {HTMLProps} from 'react';
import './styles.css'
import { BsSearch } from 'react-icons/bs';

 

interface Props extends HTMLProps<HTMLInputElement>{
  label?: string;
}

export const SearchBar: React.FC<Props> = ({label, ...rest}) =>{
  
  return (
  <div id="search-container">
    <label className="label">{ label }</label>
    <div className="search-input-container">
       <BsSearch className="search-icon"/>
      <input className="search-input" {...rest}/>
    </div>
  </div>
  )
}
