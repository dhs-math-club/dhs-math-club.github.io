import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Amc from "./pages/Amc"

function App() {
  return (
    <ChakraProvider>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/amc" element={<Amc />} />
        </Routes>
      </HashRouter>
    </ChakraProvider>
  )
}

export default App
