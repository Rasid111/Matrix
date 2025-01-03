import Header from './components/Header'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Main from './components/Main';

function App() {
  const [globalState, setGlobalState] = useState({theme: false});
  document.querySelector("html").dataset.bsTheme = globalState.theme === false ? "dark" : "light";
  return (
    <>
      <Header globalState={globalState} setGlobalState={setGlobalState}></Header>
      <Main globalState={globalState}></Main>
    </>
  )
}

export default App
