import React from 'react'
import TituloPrincipal from './componentes/tituloPrincipal/tituloPrincipal'
import Boton from './componentes/Boton/Boton'
import Contador from './componentes/Contador/Contador'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'

const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer saludo="Bienvenidos a JeepStam"/>
      <Contador/>
    </>
  )
}

export default App