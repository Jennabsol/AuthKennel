import React, { Component } from "react"
import "./animal.css"
import AnimalCard from "./AnimalCard"
import AddAnimal from "./AddAnimal"

export default class AnimalList extends Component {
  render() {
    console.log(this.props.animals)
    return (
      <React.Fragment>
        <AddAnimal {...this.props} />
        <section className="animals">
          {this.props.animals.map(animal => (
            <AnimalCard key={animal.id} animal={animal} {...this.props} />
          ))}
        </section>
      </React.Fragment>
    )
  }
}
