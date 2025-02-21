import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/NavBar/NavBar'

function App() {
  

  return (
    <>
      <NavBar></NavBar>
      <h1 className='text-4xl bg-rose-500 mt-10 '>Vite + React</h1>
      <DaisyNav className="mt-10"></DaisyNav>
    </>
  )
}

export default App
