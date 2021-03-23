import React, { Component } from 'react'
import './item.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch,
    Redirect,
    useHistory,
    useLocation
  } from "react-router-dom";
function Item(props) {
    return (
        
            <div className="item">
                <img src={ props.linkGambar }/>
                <div className="itemName">
                    {props.itemName}
                </div>
                <div className="itemPrice">
                    {props.itemPrice}
                </div>
                <div className="detailsBtn">
                    <Link to = {`/${props.itemName}/${props.itemPrice}`}>
                        <button className="details">Go to Item</button>
                    </Link>
                </div>
                 
                
            </div>
        
    );
}

export default Item;
