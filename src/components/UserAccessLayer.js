import React, { Component } from "react"
import Nav from "./Nav/Nav"
import ApplicationViews from "./ApplicationViews"
import ApiManager from "./modules/ApiManager"


export default class UserAccessLayer extends Component {
  state = {
    activeUser: {}
  }

  componentDidMount() {
    ApiManager.single("users", this.activeUserId()).then(activeUser =>
      this.setState({ activeUser: activeUser })
      )
    }
    activeUserId = () => parseInt(sessionStorage.getItem("credentials"))

  render() {
    return (
      <React.Fragment>
        <Nav activeUser={this.state.activeUser} />
        <ApplicationViews activeUserId={this.activeUserId} activeUser={this.state.activeUser}  />
      </React.Fragment>
    )
  }
}
