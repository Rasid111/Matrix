import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './sass/style.scss'
import Home from './components/Home'
import Info from './components/Info'
import Nav from './components/Nav'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <BrowserRouter>
    <Info></Info>
    <Nav className="mt-3"></Nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
