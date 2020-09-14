import './navbar.component.css';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class NavbarComponent extends Component {
    render() {
        return (
            <div className='navbar'>
                <Link to='/today'>
                    <div>Current Year</div>
                </Link>
               <a href='/today'>Current Month</a>
               <a href='/today'>Today</a>
            </div>
        )
    }
}
