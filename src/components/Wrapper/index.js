import React from "react";
import "./style.css";


 

 
function Wrapper(props) {
  return (
    <div>
   
 
  <div className="row">
  
    <h2 className="brand">Memory Game</h2>
 
    <h2 className="brand">Click an image to begin!</h2>
    
    <h2 className="brand">Score: {props.score} | Top Score: {props.topScore}</h2>
    </div>


<div className="wrapper">{props.children}</div>
</div>
  )
}
  

export default Wrapper;
