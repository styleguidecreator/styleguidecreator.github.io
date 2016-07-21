import React, {Component} from "react";
import HomeContainer from "./containers/home";
import AboutContainer from "./containers/about";
import {Router, Route} from "react-router";

class Routes extends Component {
  render() {
    return <Router history={this.props.history}>
      <Route path="/" component={HomeContainer}/>
      <Route path="/about" component={AboutContainer}/>
    </Router>;
  }
}


export default Routes;
