import { Component } from "react";
import "./card-list.css";
import CardContainer from "../card-container/card-container.components";

class CardList extends Component {
    render(){
        const { monsters } = this.props;
        return(
            <div className="card-list">
                {monsters.map((monster)=>{
                    const {id, name, email} = monster;
                    return (
                        <CardContainer key={id} id={id} name={name} email={email}/>
                    )
                })}
            </div>
        )
    }
}

export default CardList;