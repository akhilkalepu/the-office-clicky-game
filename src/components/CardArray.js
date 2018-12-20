import React from "react";

const CardArray = props => (
    <div 
    className="card" 
    value={props.id} 
    onClick={() => props.handleClick(props.id)}
    >
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
</div>
);

export default CardArray;