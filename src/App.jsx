import { useState } from 'react'
import Button from'./componentes/button/button'
import Frase from './componentes/frase/frase'
import './App.css'

function App() {

  return (
    <>
      <Frase p="No mesmo instante em que recebemos pedras em nosso caminho,
    flores estão sendo plantadas mais longe.
    Quem desiste não as vê. William Shakespeare"/>
      < Button label="O texto está colorido e com upperCase"/>
      </>
  )
}

export default App
