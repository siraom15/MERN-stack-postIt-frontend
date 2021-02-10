import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'
const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-pink rounded shadow-sm mt-2">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Post-It</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/test">test</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/signup">Sign up</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;