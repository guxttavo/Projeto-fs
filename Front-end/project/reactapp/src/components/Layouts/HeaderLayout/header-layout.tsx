import React from 'react';
import { useState } from "react";
import './styles.css'

import { FaHome } from 'react-icons/fa'
import { MdOutlineLaptopMac } from 'react-icons/md'
import { BiBookBookmark } from 'react-icons/bi'
import { RiLiveLine } from 'react-icons/ri'
import { AiOutlineLogout } from 'react-icons/ai'
import { FiSettings } from 'react-icons/fi'

import hamburger from './hamburger.svg'
import logoUnipe from './logounipe.png'

export function Header() {
  const [open, setOpen] = useState(true);

  function handleClick() {
    setOpen(!open);
  }

  function addClass() {
    
    const element = document.querySelector('#test');
    element!.classList.add('icon-active')
  }
  
  return(
    

  
  <div className={`sidebar header ${!open ? "close" : ""}`}>
    <img className="hamburger" src={hamburger} onClick={handleClick}alt="" />
    
    <div className="logo-details">
      
      <img className={`logo-unipe ${!open ? "logo-close" : ""}`} src={logoUnipe} alt="" />
    </div>
    
    <ul className={`nav-links ${!open ? "logo-close" : ""}`}>
      
      <li>
        <div className="icon-link" >
          <a href="#" id="test" onClick={addClass}>
            <i className='icon' ><FaHome/></i>
            <span className="link_name">Home</span>
          </a>
        </div>
        <div className="icon-link" onClick={addClass}>
          <a href="#" id="test" onClick={addClass}>
            <i className='icon' ><MdOutlineLaptopMac/></i>
            <span className="link_name">Cursos</span>
          </a>
        </div>
        <div className="icon-link">
          <a href="#">
            <i className='icon' ><BiBookBookmark/></i>
            <span className="link_name">Aulas</span>
          </a>
        </div>
        <div className="icon-link">
          <a href="#">
            <i className='icon' ><RiLiveLine/></i>
            <span className="link_name">Ao vivo</span>
          </a>
        </div>

        

      <div className="bottom-sidebar">
      <div className="icon-link">
        <a href="#">
          <i className='icon' ><FiSettings/></i>
          <span className="link_name">Configurações</span>
        </a>
      </div>
      <div className="icon-link">
        <a href="#">
          <i className='icon' ><AiOutlineLogout/></i>
          <span className="link_name">Sair</span>
        </a>
      </div>
    </div>
      </li>
      </ul>
      
    
    
  
  
      
  </div>
  
    
  )
}