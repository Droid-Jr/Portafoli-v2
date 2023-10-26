
import './App.css'
import About from './components/About'
import Contac from './components/Contac'
import Education from './components/Education'
import Frase from './components/Frase'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skill from './components/Skill'
import Footer from './components/Footer'
import useLenguaje from './hook/useLenguaje'

function App() {
  
  const [idioma , cambio] = useLenguaje();

  return (
    <main className='flex flex-col gap-10  bg-[#282C33] overflow-hidden overflow-y-scroll'>
    <Navbar idioma={idioma} cambio={cambio}/>
    <Home idioma={idioma} />
    <Frase idioma={idioma}/>
    <Education idioma={idioma}/>
    <Projects idioma={idioma}/>
    <Skill idioma={idioma}/>
    <About idioma={idioma}/>
    <Contac idioma={idioma}/>
    <Footer/>
    </main>
  )
}

export default App
