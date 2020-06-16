import React, { Component } from 'react'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="" width="100px" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about-us">About</Link>
                        </li><li className="nav-item">
                            <Link className="nav-link" to="/contact-us">Contact us</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <Link className="btn btn-outline-success my-2 my-sm-0 mr-3" to="/login">Login</Link>
                        <Link className="btn my-2 my-sm-0" to="/signup" style={{ backgroundColor: "orange", border: "none" }}>Signup</Link>
                    </form>
                </div>
            </nav>
        )
    }
}
