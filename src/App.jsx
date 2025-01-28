import { BrowserRouter } from "react-router-dom"
import {About , Contact , Experience  , Hero , Navbar , Tech , Works  }
 from "./components"
import Resume from "./components/resume"

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
        
    
       <div className="relative z-0 ">
         <Contact/>
         <Resume/>
     
       </div>

       
     </div>

    

     </BrowserRouter>

     
 
  )
}

export default App
