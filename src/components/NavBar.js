import React from 'react';
import { NavLink } from 'react-router-dom';

export default class NavBar extends React.Component {
    render() {
        return (
        <div className="navbar">
        <NavLink to="/" style={{paddingRight: '15px'}}>Home</NavLink>
        <NavLink to="/moti" style={{paddingRight: '15px'}}>Random Motivation</NavLink>
        <NavLink to="/form" style={{paddingRight: '15px'}}>Submit Motivation</NavLink>
        <NavLink to="/about" style={{paddingRight: '15px'}}>About</NavLink>
        </div>
        )
    }
}