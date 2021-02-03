import React from 'react';
import { Component } from "react";
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

class ChildOne extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <>
            <h1>React Calculator</h1>
            <ul>
                <li>
                    <Link to="/add" activeStyle={{ color: "red" }}   >Add</Link>
                </li>
                <li>
                    <Link to="/subm" activeStyle={{ color: "red" }}  >sub</Link>

                </li>
                <li>
                    <NavLink to="/multy" activeStyle={{ color: "red" }}  >multy</NavLink>

                </li>
                <li>
                    <NavLink to="/dive" activeStyle={{ color: "red" }}  >Dive</NavLink>

                </li>
                <li>
                    <NavLink to="/forms" exact activeStyle={{ color: "red" }}  >Forms</NavLink>
                </li>
                <li>
                    <NavLink to="/std" exact activeStyle={{ color: "red" }}  >Students</NavLink>

                </li>

            </ul>
            </>
        )
    }
}
export default ChildOne;


