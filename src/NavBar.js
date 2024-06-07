import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                    <div class="container-fluid">
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <Link class="nav-link active" aria-current="page" to={"/"}>Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to={"/TableData"}>Table</Link>
                                </li>
                               
                                
                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

