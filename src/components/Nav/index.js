import React from "react";
import "./style.css";


export function Nav(props) {
    return (   
        <div>
            <nav className="nav-extended ">
                <div className="container">
                    <h2 className="left-align">Home Inventory</h2>
                <div className="nav-content">
                    <ul className="tabs tabs-transparent">
                        <li className="tab"><a>Inventory</a></li>
                        <li className="tab"><a>Available</a></li>
                    </ul>
                </div>
                </div>
            </nav>
        </div>
    );
}


export default Nav