import React from "react";
import meta from '../../assets/img/meta.jpeg'
import { AiOutlineWhatsApp } from "react-icons/ai";
import "./Home.css"
import Courses from "../Courses/Courses";
import Plans from "../Plans/Plans";
import Community from "../Community/Community";
import About from "../About/About";



function Home() {

  const handleClick=()=>{

    window.open('https://www.youtube.com/@techflixai')
  }
  return (
    <>
   
   <section>
      <div className="container">
        <div className="home-container">
          <div className="home-content">
            <h2 className="section-title">Learn Everthing for Free</h2>
            <p>
              Master Trending Technology with Techflix AI , Invest Your Time and
              Return skills
            </p>
            <div className="home-btn">
              <button className="register-btn" onClick={handleClick}>Get Started</button>
              <button className="register-btn" onClick={handleClick}>Watch Now</button>
            </div>
          </div>
          <div className="home-image">
            <div className="home-img-wrapper">
              <div className="box-o1">
  
                <div className="box-img">
                  <img src={meta} alt=".." />
                </div>
            </div>
            <div className="whatsapp-container">
              <h5>500 + students</h5>
              <AiOutlineWhatsApp color="green"/>
            </div>
            <div className="support-container">
              <h5>Active Support</h5>
            </div>
          </div>
        </div>
      </div>
      </div>
   </section>
   <Courses/>
   <Community/>
   <Plans/>
   <About/>
   </>
  );
}

export default Home;
