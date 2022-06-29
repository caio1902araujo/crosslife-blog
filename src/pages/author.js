import React from 'react'
import Intro from '../components/intro/intro'
import Section from '../components/section/section'

const Author = () => {
  return (
    <>
      <Intro title='Lucas Yuji' 
        description='Japones apaixonado por esportes dos mais variados tipos. Ama acompanhar futebol e adora bater uma pelada'
        typeStyle='secondary'
        urlImage='true'
      />

      <Section typeStyle="primary" typeGridNews="allNews"/>
    </>
  )
}

export default Author