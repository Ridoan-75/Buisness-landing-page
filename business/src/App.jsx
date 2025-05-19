import './App.css'
import Companylogo from './components/Companylogo'
import Feautres from './components/Feautres'
import Footer from './components/Footer'
import FutureSection from './components/FutureSection'
import Hero from './components/Hero'
import Monitor from './components/Monitor'
import Navbar from './components/Navbar'
import Newslatter from './components/Newslatter'
import Pricing from './components/Pricing'
import PurposeSection from './components/PurposeSection'
import Schedule from './components/Schedule'
import Testimonial from './components/Testimonial'

function App() {
  return (
    <>
      <main className='relative min-h-screen overflow-x-hidden'>
        <div className='absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500/40 to-pink-500/40 rounded-full blur-[80px] -z-80'></div>
        <div className='overflow-hidden'>
          <Navbar/>
          <Hero/>
          <Companylogo/>
          <PurposeSection/>
          <Feautres/>
          <Schedule/>
          <Monitor/>
          <Pricing/>
          <FutureSection/>
          <Testimonial/>
          <Newslatter/>
          <Footer/>
      </div>
      </main>
    </>
  )
}

export default App
