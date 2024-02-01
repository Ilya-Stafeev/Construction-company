import './index.scss'

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Home, About, Services, Portfolio, Contacts } from './pages'



const App = () => {  

  return (
    <BrowserRouter>      
      <Routes>        
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />  
        <Route path="/portfolio" element={<Portfolio />} />  
        <Route path="/contacts" element={<Contacts />} />   
      </Routes>
    </BrowserRouter> 
  )
}

export default App
