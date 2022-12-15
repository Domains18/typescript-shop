import React from 'react';
import{ Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Home } from './Pages/Home';
import { Store } from './Pages/Store';
import { About } from './Pages/About';
import { Navbar } from './Components/Navbar';
function App() {

  return (
    <Container className='mb-4'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="store" element={<Store/>} />
        <Route path="about" element={<About/>} />
      </Routes>
    </Container>
  )
}

export default App
