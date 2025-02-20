import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:'	#404040'}}>
        <Link className="nav-link" to='/' style={{color:'silver',fontSize:20,fontFamily:'bold'}}>Blog Lyfe</Link>
        <button 
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink className="nav-link" style={{color:'silver',fontSize:20,fontFamily:'bold'}} exact to='/'>Home <span className="sr-only">(current)</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" style={{color:'silver',fontSize:20,fontFamily:'bold'}} exact to='/blog'>Blog</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" style={{color:'silver',fontSize:20,fontFamily:'bold'}} exact to='/register'>Register</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" style={{color:'silver',fontSize:20,fontFamily:'bold'}} exact to='/login'>Login</NavLink>
                </li>
                
            </ul>
        </div>
    </nav>
);

export default navbar;
