import React from "react";
import "./TitleBilesen.css";


function TitleBilesen(props) {
  return (
    <div className="title">
      <p>{props.title}</p>
    </div>
  );
}
export default TitleBilesen;