import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Filter from './Components/Filter';

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Filter/>
    </>
  )
}

export default App
