import React from "react";
import "../ourStory.css";
import { motion } from "framer-motion";

function OurStory() {
  return (
    <div className="ourstory-backround-image">


        <motion.div className="about"
        initial = {{y: -50, opacity: 0}}
        animate = {{ y: 0, opacity: 1}}
        transition = {{mass: 5, damping: 10, delay: 0.5, type: 'spring', stiffness: 500, duration: 1}}
        >
          <h1
            className="about-title"
           
          >
            About Us
          </h1>
          <i class="fa fa-arrow-down arrow"
          
          ></i>
        </motion.div>



      <div className="ourstory">

        <div className="imageGroup">
        <motion.img
          className="story-image"
          src="../assets/images/store-0.jpg"
          alt="store"
          initial = {{x: '-100vh'}}
          animate = {{ x: 0}}
          transition = {{mass: 1, damping: 40, delay: 0.5, type: 'spring', stiffness: 200, duration: 1}}
        />

<motion.img
          className="story-image2"
          src="../assets/images/store-8.jpg"
          alt="store"
          initial = {{x: '100vh'}}
          animate = {{ x: 0}}
          transition = {{mass: 1, damping: 40, delay: 0.5, type: 'spring', stiffness: 200, duration: 1}}
        /></div>


<motion.div className="story-text"
 initial = {{opacity: 0}}
 animate = {{ opacity: 1}}
 transition = {{delay: 0.3,duration: 1}}
>
  <div className="parag"
  
  >
          <p>
            Since 1966 “76 LIQUORS” has been serving the Upper East Side
            neighborhood with pride. Located in the heart of UES, Manhattan, we
            proudly offer a great collection of Spirits, Wine, Champagne and
            much more to our community.
          </p>
          <p>
            {" "}
            We specialize in domestic and international brands. Whether you’re
            stocking up for the Yankees or Mets game, preparing for that special
            party, or just need a bottle of wine to end the day, we cover all
            your needs. We offer complementary and prompt delivery to our
            neighborhood, and we are open every day till midnight except
            Sundays.
          </p>
          <p>
            Our helpful, friendly and courteous staff are here and ready to
            serve you. Please stop in and see us! If you have any questions,
            please feel free to <a href="/contactus"> Contact Us.</a> We
            appreciate your business!
          </p>
        </div>
        </motion.div>


       
       
      </div>
    </div>
  );
}

export default OurStory;
