import React from "react";
import "../ourStory.css";

function OurStory() {
  return (
    <div className="ourstory-backround-image">
      <div className="ourstory">
        <img
          className="story-image"
          src="../assets/images/store-0.jpg"
          alt="store"
        />
        <img
          className="story-image2"
          src="../assets/images/store-8.jpg"
          alt="store"
        />
        <div className="story-text">
          <h1>MEET US</h1>
          <p>
          Since  1966 “76  LIQUORS”  has been serving the Upper East Side neighborhood with pride. Located in the heart of UES, Manhattan, we proudly offer a great collection of Spirits, Wine, Champagne  and much more to our community. 
          </p>
          <p> We specialize in domestic and international brands. Whether you’re stocking up for the Yankees or Mets game, preparing for that special party, or just need a bottle of wine to end the day, we cover all your needs.
We offer complementary and prompt delivery to our neighborhood, and we are open every day till midnight except Sundays.

          </p>
          <p>
Our helpful, friendly and courteous staff are here and ready to serve you. Please stop in and see us! 
If you have any questions, please feel free to Contact Us. We appreciate your business!
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurStory;
