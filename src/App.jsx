import { BrowserRouter } from "react-router-dom";
import {About,Resume, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from './components';



function App() {

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-primary relative z-0">
            <div className="bg-hero-pattern bgg-cover bg-no-repeat bg-center">
              <Navbar />
              <Hero />
            </div>
            <About />
            <Experience />
            <Tech />
            <Works />
            {/* <Feedbacks /> */}
            <div className="relative z-0">
              <Contact />
              <StarsCanvas />
            </div>
            <div className="flex justify-center items-center">
                <Resume />
            </div>
            <footer className="mt-8 mb-8" id="resume">
              <div className="h-[2px] bg-gradient-to-r from-green-400 via-pink-500 to-purple-600 mx-4"></div>
              <p className="text-center text-secondary mt-4">© Rishabh Singh Inc. All rights reserved.</p>
            </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
