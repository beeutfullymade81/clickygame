import React from "react";
import "./photostuff.css";
import "../../photos.json"

const Photostuff = props => (
  <div className="character" onClick={() => props.clickCount(props.id)}>
    <div className="character-wrapper">
    <ul>
      <li>
      <img alt={props.name} src={props.image} />
    </li>
    </ul>
    </div>
  </div>
);

export default Photostuff;