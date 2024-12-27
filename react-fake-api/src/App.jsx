import './App.css'
import Cards from "./component/Cards"
import React from "react"
import Cart from './component/Cart'

class App extends React.Component{
  render() {
    return (
      <>
        <Cards></Cards>
        <Cart/>
      </>
    )
  }
}

export default App
