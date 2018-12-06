import React, { Component } from "react"
// import { Link } from "react-router-dom"
import dog from "./DogIcon.png"
import "./animal.css"
// import DetailAnimalModal from "./DetailAnimalModal"
import { Button } from "reactstrap"

export default class AnimalCard extends Component {
  render() {
    return (
      <div key={this.props.animal.id} className="card">
        <div className="card-body">
          <div className="card-title">
            <img src={dog} className="icon--dog" alt="" />
            <h4>{this.props.animal.name}</h4>
            {/* <Link className="nav-link" to={`/animals/${this.props.animal.id}`}>Details</Link> */}
            {/* <DetailAnimalModal {...this.props} /> */}
            <Button
              color="link"
              onClick={() => this.props.deleteAnimal(this.props.animal.id)}
              className="card-link">
              Discharge
            </Button>
          </div>
        </div>
      </div>
    )
  }
}
