import React from 'react';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import './style.css';
import Navbar from './Components/Navbar.js';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import About from './Pages/About';
function App() {
  return (
    
    
    
      
      <Router>
    <div >
      <Navbar/>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/Projects" component={Projects}/>
      <Route path="/About" component={About}/>
      </Switch>
    </div>
    </Router>
       
    );
   
  }

export default App;
