import React, { Component } from 'react'
import './Details.css';
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

function Details() {
  let{topicId,price} = useParams();
        return (
            <div className="itemDetail">
                <div className="itemNameDetail">
                    {topicId}
                </div>
                <div className="itemPriceDetail">
                    {price}
                </div>
                <div className="details">
                    <p>
                       Narindra
                    </p>
                    
                </div>
            </div>
        )
}

export default Details;
