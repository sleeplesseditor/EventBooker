import React from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../context/auth-context';
import './MainNavigation.css';

const MainNavigation = props => (
    <AuthContext.Consumer>
        {(context) => {
            return (
                <header className="main-navigation">
                    <div className="main-navigation__logo">
                        <h1>EventBooker</h1>
                    </div>
                    <div className="main-navigation__menu">
                        <nav className="main-navigation__items">
                            <ul>
                                {!context.token && <li>
                                    <NavLink to="/auth">
                                        Log In
                                    </NavLink>
                                </li>}
                                <li>
                                    <NavLink to="/events">
                                        Events
                                    </NavLink>
                                </li>
                                {context.token && (
                                    <React.Fragment>
                                        <li>
                                            <NavLink to="/bookings">
                                                Bookings
                                            </NavLink>
                                        </li>
                                        <li>
                                            <button onClick={context.logout}>Log Out</button>
                                        </li>
                                    </React.Fragment>
                                )}
                            </ul>
                        </nav>
                    </div>
                </header>
            )
        }}
    </AuthContext.Consumer>
);

export default MainNavigation;