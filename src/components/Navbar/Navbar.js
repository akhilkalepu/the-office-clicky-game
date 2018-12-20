import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <nav class="navbar fixed-top navbar-dark bg-dark">
        <a class="navbar-brand mb-0 h1" href="/">The Office Clicky Game</a>
        <a class="text-white">Click on an image to earn points, but don't click on any more than once!</a>
        <a class="text-white">Score: {props.score} | Top Score: {props.topScore}</a>
    </nav>
);

export default Navbar;
