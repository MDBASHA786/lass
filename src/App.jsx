import { BrowserRouter, Route, Routes } from 'react-router-dom'

// 1
// import './App.css';
import './styles/styles.css'

import Particle from './components/Particle'

import Home from './pages/Home'
import Registration from './pages/Registration'
import Navbar from './components/Navbar'
import PaperPres from './pages/tech/PaperPres'
import CodeRoulette from './pages/tech/CodeRoulette';
import Interface from './pages/tech/Interface'
import TechQuest from './pages/tech/TechQuest'

import GameVerse from './pages/nontech/GameVerse'
import BoxCricket from './pages/nontech/BoxCricket'
import ESports from './pages/nontech/ESports'
import BioScope from './pages/nontech/BioScope'

import Footer from './components/Footer'

//2
import Update from './components/Update'


function App() {
  return (
    <BrowserRouter>
      
      <Particle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} /> 

        {/* Technical Events */}
        <Route path='/event/PaperPress-unfold' element={<PaperPres/>} />
        <Route path='/event/CodeRoulette' element={<CodeRoulette/>} />
        <Route path='/event/Interface' element={<Interface/>} />
        <Route path='/event/TechQuest' element={<TechQuest/>} />

        {/* Non-Technical Events */}
        <Route path='/event/snap-seek' element={<GameVerse/>} />
        <Route path='/event/BoxCricket' element={<BoxCricket/>} />
        <Route path='/event/apex-conquest' element={<ESports/>} />
        <Route path='/event/BioScope' element={<BioScope/>} />

        {/* Test Route - temp */}
        {/* <Route path='/event/update' element={<Update/>} /> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;