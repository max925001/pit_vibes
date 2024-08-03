
import './App.css'
import Navbar from './components/Navbar'
import {DogImage, DogImage1 ,} from './components/DogImage'
import MainSection from './components/MainSection'
import Contact from './components/Contact'
import CustomerReview from './components/CustomerReview'
import Blogs from './components/Blogs'
import Footer from './components/Footer'

function App() {
  

  return (
    <div>
     <Navbar/>
     <DogImage/>
     <MainSection/>
     <DogImage1/>
     <Contact/>
     <CustomerReview/>
     <Blogs/>
     <Footer/>
    </div>
  )
}

export default App
