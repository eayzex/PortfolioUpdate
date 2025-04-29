import "./contact.css";
import Lottie from "lottie-react";
import contactus from "../../../public/contact us.json"; 



const Contact = () => {
  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"> </span>
        Contact us
      </h1>
      <p className="sub-title">
        Contact us for more information and Get notified when I publish
        something new.
      </p>

      <div style={{justifyContent: "space-between"}} className="flex">
        <form className="">
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input required type="email" name="" id="email" />
          </div>

          <div className="flex" style={{marginTop: "24px"}}>
            <label htmlFor="message">Your message:</label>
            <textarea required name="" id="message"></textarea>
          </div>

          <button className="submit">Submit</button>
        </form>
        <div className=" animation">
          <Lottie animationData={contactus}
          style={{ height: 300}}/>
        
        </div>
      </div>
    </section>
  );
};

export default Contact;
