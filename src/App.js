import './styles/App.css';
import './styles/Mobile.css'
import Navbar from './components/Nav-bar.js'
import Route from './components/Route'
import Home from './pages/Home'
import Resume from './pages/Resume'
import ContactInfo from './pages/ContactInfo'
import { useEffect } from "react"
import { useState } from "react"

function App() {


  const [windowWidth , setWidth] = useState(0)
    

  useEffect( () => {
      function updateWindowWidth() {
          setWidth(window.innerWidth)
      }

      window.addEventListener("resize" , updateWindowWidth)

      return () => {
          window.removeEventListener("resize" , updateWindowWidth)
      }
  } , [])


  return (
    <section  className='main-container'>
      <Navbar />
      <Route path='/'            component= {<Home/>} />
      <Route path='/resume'      component= {<Resume/>} />
      <Route path='/contactinfo' component= {<ContactInfo/>} />
    </section>

  );
}

export default App;
