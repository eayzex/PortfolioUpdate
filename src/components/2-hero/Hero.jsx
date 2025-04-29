import "./hero.css";
import devanimation from "../../../public/dev.json";
import Lottie from "lottie-react";
const Hero = () => {
  return (
    <section className="hero flex">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <img src="./me.jpg" className="avatar" alt="" />
          <div className="icon-verified"></div>
        </div>

        <h1 className="title">
          Programer, <br />
          and Software developer 
        
        </h1>
        <p className="sub-title">
           Hello I'm youssef elalmi welcome to my portfolio
        </p>

        <div className="all-icons flex">
          <div className="icon icon-twitter"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin"></div>
        </div>
      </div>

      <div className="right-section animation ">
      
          <Lottie animationData={devanimation}
          style={{ height: 300}}/>
      </div>
    </section>
  );
};

export default Hero;
