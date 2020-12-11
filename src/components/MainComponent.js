import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import HomePage from "./HomeComponent";
import OurStory from "./OurStoryComponent";
import Products from "./ProductsComponent"; 
import Contact from "./ContactUsComponent";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />
        
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/ourstory" component={OurStory} />
          <Route path="/products" component={Products} />
          <Route path="/contactus" component={Contact} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
