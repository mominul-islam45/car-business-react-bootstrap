import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Filter from './Components/Filter';
import Trending from './Components/Trending';
import Best_CarMakes from './Components/Best_CarMakes';
import RecentReviews from './Components/RecentReviews';
import NearYou from './Components/NearYou';
import Footer from './Components/Footer';

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Filter/>
      <Trending/>
      <Best_CarMakes/>
      <RecentReviews/>
      <NearYou/>
      <Footer/>
    </>
  )
}

export default App
