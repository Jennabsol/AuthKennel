import React, { Component } from "react"
import ApiManager from "../modules/ApiManager"

export default class AnimalViews extends Component {
  state = {
    animals: []
  }
  componentDidMount() {
    ApiManager.all("animals").then(animals =>
      this.setState({ animals: animals })
    )
  }

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

  render() {
    return <React.Fragment />
  }
}
