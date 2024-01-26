import './index.scss'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from "./pages/Home"
import Home2 from "./pages/Home2"

const App = () => {  

  return (
    <BrowserRouter>      
      <Routes>        
        <Route path="/" element={<Home />} />
        <Route path="/h" element={<Home2 />} />    
      </Routes>
    </BrowserRouter> 
  )
}

export default App