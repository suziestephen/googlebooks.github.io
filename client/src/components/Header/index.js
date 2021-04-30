import React from "react";
import "./header.css";

function Header() {
    return (
        // Header to function as Jumbotron 
        <div className="jumbotron text-center"> 
            <div className="container text-light">
                <h1>Google Books Search</h1>
                <h3>Search for and Save Books of Interest</h3>
            </div>
        </div>
    );
}

export default Header;