import React from 'react';

import './Navbar.css';
import {Link} from 'react-router-dom';
const Navbar = () => {
    const highlighter1 = function(){
        document.getElementById("one").classList.add("active");
        document.getElementById("two").classList.remove("active");
        document.getElementById("three").classList.remove("active");
    }
    const highlighter2 = function(){
        document.getElementById("one").classList.remove("active");
        document.getElementById("two").classList.add("active");
        document.getElementById("three").classList.remove("active");
    }
    const highlighter3 = function(){
        document.getElementById("one").classList.remove("active");
        document.getElementById("two").classList.remove("active");
        document.getElementById("three").classList.add("active");
    }
    return(
        <div>
          <nav>
         <div class="container">
            <div class="branding">
               <a ><span>Riyaz Syed</span></a>
            </div>
            <ul>
                <Link  class="li" to="/"  onClick={highlighter1}  ><a id="one">Home</a></Link>
                <Link class="li" to="/Projects"  onClick={highlighter2} ><a id="two" >Projects</a></Link>
                <Link  class="li" to="/About"  onClick={highlighter3}  ><a id="three" >About </a></Link>
            </ul>
        </div>
        </nav>
        </div>     
    
    )
}
export default Navbar;