import React from "react";
import "./header.css";


const Header = props => (
    <div className="jumbotron jumbotron-fluid">
    <div className="heading">{props.children}</div>
    <div className="scoring">Current Score: {props.score} Highest Score: {props.highscore} </div>
    </div>
);

export default Header;