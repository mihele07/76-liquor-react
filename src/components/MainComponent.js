import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import HomePage from "./HomeComponent";
import OurStory from "./OurStoryComponent";
import Products from "./ProductsComponent";
import Contact from "./ContactUsComponent";
import { ChampagneList } from "../Data/champagneList";
import { spiritsList } from "../Data/spiritsList";
import { wineList } from "../Data/wineList";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      champagne : ChampagneList,
      spirit : spiritsList,
      wine : wineList
    };
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/ourstory" component={OurStory} />
          <Route exact path="/products" render = { () => < Products champagnes={this.state.champagne} 
          spirits={this.state.spirit} wines={this.state.wine} />} />
          <Route path="/contactus" component={Contact} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
