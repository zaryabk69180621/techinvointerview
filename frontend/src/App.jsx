import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/About' Component={About}></Route>
        <Route path='/ContactUS' Component={Contact}></Route>
      </Routes>
    </BrowserRouter>     

    </>
  )
}

export default App
