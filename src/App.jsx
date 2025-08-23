import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Lenis from '@studio-freight/lenis'

import LandingPage from './components/Home/LandingPage'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Contact from './components/pages/Contact'
import About from './components/pages/About'
import Department from './components/pages/Department'
import Doctor from './components/pages/Doctor'
import News from './components/pages/News'
import Appointments from './components/pages/Appointments'
import SignIn from './components/Auth/SignIn'
import SignUp from './components/Auth/SignUp'

import './App.css'
import DoctorDetails from './components/pages/DoctorDetails'
import MainProfile from './components/Profile/MainProfile'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth easeOutExpo
      smooth: true,
    })

    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/appointment/:id" element={<DoctorDetails/>} />
        <Route path="/profile" element={<MainProfile />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/department" element={<Department />} />
        <Route path="/doctors/:department" element={<Doctor />} />
        
        <Route
          path="*"
          element={<h1 className="text-center py-20 text-2xl">Page Not Found</h1>}
        />
      </Routes>

      <Footer />
    </>
  )
}

export default App

