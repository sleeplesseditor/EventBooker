import React from 'react';
import { NavLink } from 'react-router-dom';
import './MainNavigation.css';

const MainNavigation = props => (
    <header className="main-navigation">
        <div className="main-navigation__logo">
            <h1>EventBooker</h1>
        </div>
        <div className="main-navigation__menu">
            <nav className="main-navigation__items">
                <ul>
                    <li>
                        <NavLink to="/auth">
                            Log In
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/events">
                            Events
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/bookings">
                            Bookings
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
);

export default MainNavigation;