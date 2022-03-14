import { Component } from "react";
import "./card-container.css";

class CardContainer extends Component{
    render(){

        return(
<div className="card-container" key={this.props.id}>
                        <img src={`https://robohash.org/${this.props.id}?set=set2`} alt={`Monster ${this.props.name}`} />
                        <h1>{this.props.name}</h1>
                        <p>{this.props.email}</p>
                        </div>
        )
    }
}

export default CardContainer;