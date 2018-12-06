import React, { Component } from "react"
import { NavLink } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import ApiManager from "../modules/ApiManager"

class Nav extends Component {
  state = {
    query: "",
    results: { animal: [], employee: [], owner: [], location: [] }
  }

  logout = () => {
    sessionStorage.clear("credentials")
    this.props.setAuth()
  }

  enterEventStuff = event => {
    if (event.keyCode === 13) {
      alert("yay")
    }
  }
  handleInputChange = () => {
    let searchStuff = {}
    this.setState(
      {
        query: this.search.value
      },
      () => {
        if (this.state.query) {
          console.log("query", this.state.query)
          ApiManager.getSearch("animals", this.state.query)
            .then(data => (searchStuff.animal = data))
            .then(() =>
              ApiManager.getSearch("employees", this.state.query).then(
                data => (searchStuff.employee = data)
              )
            )
            .then(() =>
              ApiManager.getSearch("locations", this.state.query).then(
                data => (searchStuff.location = data)
              )
            )
            .then(() =>
              ApiManager.getSearch("owners", this.state.query).then(
                data => (searchStuff.owner = data)
              )
            )
            .then(() => {
              this.setState({ results: searchStuff })
            })
        } else if (!this.state.query) {
          this.setState({
            results: {
              animal: [],
              employee: [],
              owner: [],
              location: []
            }
          })
        }
      }
    )
  }
  render() {
    return (
      <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <NavLink className="nav-link" to="/locations">
              Locations
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/animals">
              Animals
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/employees">
              Employees
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/owners"
             >
              Owners
            </NavLink>
          </li>
          <li className="nav-item">
            <input
              placeholder="Search for..."
              ref={input => (this.search = input)}
              onChange={this.handleInputChange}
              onKeyUp={this.enterEventStuff}
            />
            {/* <Suggestions results={this.state.results} /> */}
          </li>
          <li>
            <button
              type="button"
              className="btn btn-success"
              onClick={this.logout}>
              Logout
            </button>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Nav
