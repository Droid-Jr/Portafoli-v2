
import './App.css'
import About from './components/About'
import Contac from './components/Contac'
import Education from './components/Education'
import Frase from './components/Frase'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skill from './components/Skill'

function App() {
  

  return (
    <main className='flex flex-col gap-10 bg-[#282C33] overflow-hidden overflow-y-scroll'>
    <Navbar/>
    <Home/>
    <Frase/>
    <Education/>
    <Projects/>
    <Skill/>
    <About/>
    <Contac/>
    </main>
  )
}

export default App
