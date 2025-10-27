import './App.css'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Footer from './components/Footer'
import data from './components/data/data'

function App() {
  return (
    <div>
      <Home home={data.hero} />
       <About about={data.about} /> 
       <Services services={data.services} />
       <Footer contact={data.contact} /> 
    </div>
  )
}

export default App
