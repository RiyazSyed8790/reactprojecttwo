import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
const Home = () => {
    return (
        <div>
          <main>
     <div class="imag">
       <img src="https://pbs.twimg.com/profile_images/1404050493651906570/x7ybavPD_400x400.jpg"/>
     </div>
     <div class="content">
      From Andhra Pradesh,India.A Chemical Engineer sophomore at NIT Tadepalligudem.Also a web devloper with Fluent in HTML5,CSS3,JS.Expanding my knowledge on Web Devlopment more now.   
     </div>
         </main>
         <main>
     <div class="matter">
        <p> Check out my projects and blogs<i class="fas fa-hand-point-down">:</i></p>
         <button class="btn"><Link to="./Projects">Click Here</Link></button>
     </div>
   
 </main>
 </div>
    )
}

export default Home;
