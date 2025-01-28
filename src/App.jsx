import { BrowserRouter } from "react-router-dom"
import {About , Contact , Experience  , Hero , Navbar , Tech , Works  }
 from "./components"
import Resume from "./components/Resume"

const  App = ()=> {

  
  return (

    // this is creating the layout 
    
     <BrowserRouter>
     <div className="relative z-0 bg-primary">
      <div className="bg-center bg-no-repeat bg-cover bg-hero-pattern">
        <Navbar />
        <Hero />
       </div>
       <About/>
       <Experience/>
       <Tech/>
       <Works/>
       <Contact/>
       <Resume/>
        
    
       {/* <div className="relative z-0 ">
      
       </div>
     */}

       
     </div>

    

     </BrowserRouter>

     
 
  )
}

export default App
