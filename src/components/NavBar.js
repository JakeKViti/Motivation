import React from 'react';
import { NavLink } from 'react-router-dom';

export default class NavBar extends React.Component {
    
    render() {
        return (
        <div className="navbar">
            <hr
                style={{
                    backgroundColor: "white",
                    height: 5
                }}
            />
        <NavLink to="/Motivation/" style={{paddingRight: '15px'}}>Home</NavLink>
        <NavLink to="/Motivation/moti" style={{paddingRight: '15px'}}>Random Motivation</NavLink>
        <NavLink to="/Motivation/form" style={{paddingRight: '15px'}}>Submit Motivation</NavLink>
        <NavLink to="/Motivation/about" style={{paddingRight: '15px'}}>About</NavLink>
            <hr
            style={{
                backgroundColor: "white",
                height: 5
            }}/>
        </div>
        )
    }
}
