//import { Carousel } from "bootstrap";
import React, { Component } from "react";
import "../home.css";
import { SliderData } from "../Data/SliderData";
import { ImageSlider } from "./ImageSlider";
import { CardsForHomepage } from "./CardsForHomepage";
import GlowingTitle from "./GlowingTitle";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.State = {};
  }

  render() {
    return (
      <div className="background-image">
        <ImageSlider sliderdata={SliderData} />
        <CardsForHomepage />
        <GlowingTitle />
      </div>
    );
  }
}

export default HomePage;
