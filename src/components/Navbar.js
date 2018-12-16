import React from "react";

const Navbar = props => (
    <nav class="navbar fixed-top navbar-dark bg-dark">
        <a class="navbar-brand mb-0 h1" href="/">DJ Clicky Game</a>
        <a class="text-white">Click on an image to earn points, but don't click on any more than once!</a>
        <a class="text-white">Score: 0 | Top Score: 0</a>
    </nav>
);

export default Navbar;
