import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
        <ul>
            <li>
                <a 
                href="#About-Me"> About Me</a>
            </li>
            <li>
                <a 
                href="#My-Work"> My Work</a>
            </li>
            <li>
                <a 
                href="#Contact-Me">Contact Me</a></li>
        </ul>
    </nav>
    )

}

export default Nav;