import React from 'react'
import '../components/GlobalStyles/global.css'

import { Card } from '../components/Card'
import { Header } from '../components/Layouts/HeaderLayout/header-layout'
import { SearchBar } from '../components/SearchBar'
import Logofs from '../components/Card/logofs.svg'

function HomePage() {
  return (
    <div>
      <Header />
      <div id="test-container">
        <p className="home-title">Últimas publicações</p>
        <SearchBar placeholder="Pesquisar cursos..." />
        <div id="home-container">
          <Card title="Nome do curso" name="Nome Palestrante" amount="5" />
          <Card title="Nome do curso" name="Nome Palestrante" amount="5" />
          <Card title="Nome do curso" name="Nome Palestrante" amount="5" />
          <Card title="Nome do curso" name="Nome Palestrante" amount="5" />
        </div>
      </div>
      <div id="test-container">
        <p className="home-title">Apoiadores</p>

        <div id="sponsor-container">
          <img className="sponsor" src={Logofs} alt="" />
          <img className="sponsor" src={Logofs} alt="" />
          <img className="sponsor" src={Logofs} alt="" />
          <img className="sponsor" src={Logofs} alt="" />
        </div>
      </div>
    </div>
  )
}

export default HomePage
