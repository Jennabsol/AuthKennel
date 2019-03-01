import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
class Nav extends Component {


  logout = () => {
    sessionStorage.clear("credentials")
    this.props.setAuth()
  }

  render() {
console.log(this.props.activeUser)
    return (
      <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link className="nav-link" to="/animals">
              Animals
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" >
              Aloha 🌺 {this.props.activeUser.username}
            </a>
          </li>
          <li className="logout" >
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
