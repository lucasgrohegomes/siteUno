import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './screens/Home'
import ComoJogar from './screens/ComoJogar'
import Regras from './screens/Regras'
import Sobre from './screens/Sobre'

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/comojogar' element={<ComoJogar/>}/>
        <Route path='/regras' element={<Regras/>}/>
        <Route path='/sobre' element={<Sobre/>}/>
      </Routes>
    </Router>

    
  )
}

export default App
