import { Route, Routes } from 'react-router-dom'
import '../src/assets/css/style.css'
import Navbar from './components/Navbar'
import Home from './screens/Home'
import About from './screens/About'
import Contact from './screens/Contact'
import Blogs from './screens/Blogs'
import BookConsultation from './screens/BookConsultation'
import Faq from './screens/Faq'
import Location from './screens/Location'
import Login from './screens/Login'
import Pharamcy from './screens/Pharamcy'
import PP from './screens/PP'
import Regsiter from './screens/Regsiter'
import TnC from './screens/TnC'
import Error from './screens/Error'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <>

      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/book-consultation" element={<BookConsultation />} />
          <Route path="/faqs" element={<Faq />} />
          <Route path="/location" element={<Location />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pharmacy" element={<Pharamcy/>} />
          <Route path="/privacy-policy" element={<PP />} />
          <Route path="/register" element={<Regsiter />} />
          <Route path="/term-and-ploicy" element={<TnC />} />
          <Route path="*" element={<Error />} />
        </Routes>
    </>
  )
}

export default App
