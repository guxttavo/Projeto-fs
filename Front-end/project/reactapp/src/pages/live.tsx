import React from 'react'
import '../components/GlobalStyles/global.css'

import { Card } from '../components/Card'
import { Header } from '../components/Layouts/HeaderLayout/header-layout'

function Course() {
  return (
    <div>
      <Header />
      <div id="test-container">
        <p className="home-title">Ao vivo</p>

        <div id="home-container">
          <Card title="Nome do curso" name="Nome Palestrante" amount="5" />
          <Card title="Nome do curso" name="Nome Palestrante" amount="5" />
          <Card title="Nome do curso" name="Nome Palestrante" amount="5" />
          <Card title="Nome do curso" name="Nome Palestrante" amount="5" />
          <Card title="Nome do curso" name="Nome Palestrante" amount="5" />
          <Card title="Nome do curso" name="Nome Palestrante" amount="5" />
          <Card title="Nome do curso" name="Nome Palestrante" amount="5" />
          <Card title="Nome do curso" name="Nome Palestrante" amount="5" />
        </div>
      </div>
    </div>
  )
}

export default Course
