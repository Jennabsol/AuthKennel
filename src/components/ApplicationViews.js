import React, { Component } from "react"
import ApiManager from "./modules/ApiManager"
import { Route, Redirect } from "react-router-dom"
import AnimalList from "./Animal/AnimalList"
class ApplicationViews extends Component {
  state = {
      animals: [],
      locations: [],
      employees: [],
      owners: []
  }
  componentDidMount() {
    const _state = {}
    ApiManager.all("animals")
      .then(animals => (_state.animals = animals))
      .then(() =>
        ApiManager.all("employees").then(
          employees => (_state.employees = employees)
        )
      )
      .then(() =>
        ApiManager.all("locations").then(
          locations => (_state.locations = locations)
        )
      )
      .then(() =>
        ApiManager.all("owners").then(owners => (_state.owners = owners))
      )
      .then(() => {
        this.setState(_state)
      })
  }
  // Animal Functions
  addAnimal = obj =>
    ApiManager.add("animals", obj).then(animals =>
      this.setState({ animals: animals })
    )

  editAnimal = (id, obj) =>
    ApiManager.edit("animals", id, obj).then(animals =>
      this.setState({ animals: animals })
    )

  deleteAnimal = id =>
    ApiManager.delete("animals", id).then(animals =>
      this.setState({ animals: animals })
    )

  // Employee Functions
  addEmployee = obj =>
    ApiManager.add("employees", obj).then(employees =>
      this.setState({ employees: employees })
    )

  editEmployee = (id, obj) =>
    ApiManager.edit("employees", id, obj).then(employees =>
      this.setState({ employees: employees })
    )

  deleteEmployee = id =>
    ApiManager.delete("employees", id).then(employees =>
      this.setState({ employees: employees })
    )
  // Owner Functions
  addOwner = obj =>
    ApiManager.add("owners", obj).then(owners =>
      this.setState({ owners: owners })
    )

  editOwner = (id, obj) =>
    ApiManager.edit("owners", id, obj).then(owners =>
      this.setState({ owners: owners })
    )

  deleteOwner = id =>
    ApiManager.delete("owners", id).then(owners =>
      this.setState({ owners: owners })
    )

  render() {
    return (
    <React.Fragment>
            <Route exact path="/animals" render={(props) => {
                return <AnimalList {...props}
                    deleteAnimal={this.deleteAnimal}
                    animals={this.state.animals}
                    addAnimal={this.addAnimal}
                    employees={this.state.employees}
                    owners={this.state.owners}
                    activeUser={this.props.activeUser}
                     />
            }} />
    </React.Fragment>
    )
  }
}
export default ApplicationViews
