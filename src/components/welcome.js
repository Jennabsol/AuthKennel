import React, { Component } from "react"
import Nav from "./Nav/Nav"
import ApplicationViews from "./ApplicationViews";

export default class Welcome extends Component {
  render() {
    return <React.Fragment>
        <Nav {...this.props} />
        <ApplicationViews {...this.props} />
      </React.Fragment>
  }
}
