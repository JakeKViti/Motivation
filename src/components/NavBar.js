import React from 'react';
import { NavLink } from 'react-router-dom';

export default class NavBar extends React.Component {
    render() {
        return (
        <div className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/motd">Today's Motivation</NavLink>
        <NavLink to="/form">Form</NavLink>
        </div>
        )
    }
}