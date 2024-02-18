import './App.css'
import Header from './components/header/header'
import College from './components/college'
import Department from './components/department'
import Conference from './components/conference'
import Domains from './components/domains'
import Organizing from './components/organizing'
import Advisory from './components/advisory'
import Technical from './components/technical'
import Speakers from './components/speakers'
import Register from './components/register'
import Contact from './components/contact'
import Footer from './components/footer'
import Top from './components/top'
import {Fade} from 'react-reveal'

function App() {

  return (
    <>
      <Header/>
      <Fade bottom duration={1000} delay={100}>
        <College />
      </Fade>
        
      <Fade bottom duration={1000} delay={100}>
        <Department />
      </Fade>
      
      <Fade bottom duration={1000} delay={100}>
        <Conference />
      </Fade>
      
      <Domains />
      <Organizing />
      <Advisory />
      <Technical />
      <Speakers />
      <Register />
      <Contact />
      <Footer />
      <Top />

    </>
  )
}

export default App
