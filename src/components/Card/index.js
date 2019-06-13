import React from "react";
import "./style.css";


export function Card(props) {
    return (
        <div className="container">
            <div className="card white" id="houseCards">
                <div className="row">
                    <div className="col s8" id="cardText">
                        <h5 className="left-align">{props.name}</h5>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Id # </th>
                                        <th>Model #</th>
                                    </tr>
                                </thead>
                            <tbody>
                                <tr>
                                    <td className="left-align">{props.id}</td>
                                    <td className="left-align">{props.modelNumber}</td>
                                </tr>
                            </tbody>
                            </table>
                    </div>
                    <div className="col s4">
                        <img id="houseThumbnail" src={props.ThumbnailImage || "https://via.placeholder.com/200X150"} alt="..." />
                    </div>
                </div>
            </div>
        </div>  
    );
}


export default Card