import { BrowserRouter } from "react-router-dom";
import {About,Resume, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from './components';



function App() {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
            <div className="bg-hero-pattern bgg-cover bg-no-repeat bg-center">
              <Navbar />
              <Hero />
            </div>
            <About />
            <Experience />
            <Resume />
            <Tech />
            <Works />

            {/* <Feedbacks /> */}
            <div className="relative z-0">
              <Contact />
              <StarsCanvas />
            </div>    
      </div>
    </BrowserRouter>
  )
}

export default App
