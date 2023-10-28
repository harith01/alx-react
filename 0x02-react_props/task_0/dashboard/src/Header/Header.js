import logo from "../assets/holberton-logo.jpg";
import React from 'react';
import './Header.css'

export default function () {
    return (
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>School dashboard</h1>
        </div>
    );
}