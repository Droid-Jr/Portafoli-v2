
import './App.css'
import Education from './components/Education'
import Frase from './components/Frase'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skill from './components/Skill'

function App() {
  

  return (
    <main className='w-[100%] h-[100vh] bg-[#282C33] overflow-hidden overflow-y-scroll'>
    <Navbar/>
    <Home/>
    <Frase/>
    <Education/>
    <Projects/>
    <Skill/>
    </main>
  )
}

export default App
