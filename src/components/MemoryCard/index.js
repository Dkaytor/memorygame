import React from "react";
import "./style.css";




function MemoryCard(props) {
  return (
    <div className="card">
    <div  onClick={() => props.handleClick(props.id)} className="img-container">  
    <img alt={props.id} src={props.image}/>
    
      </div>
      
  </div>
  );
}


export default MemoryCard;
