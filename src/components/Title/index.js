import React from "react";
import "./style.css";

function Title(props) {
  return (
  <div className="header">
    
    <div className="row">
   <h1 className="line">Memory Game!</h1> 
  <h2 className="line">Goal is to click on each image once!</h2>
  <h2 className="line">If you click on the same image twice you lose!</h2>

  </div>

  <div className="title">{props.children}</div>
 </div>
  

 
  )
}

export default Title;
