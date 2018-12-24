import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from "../images/logo.png";
import './Navbar.css'

class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <div className="navbar-brand">
                        <img src={logo} className="logo" alt=""/>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item dropdown">
                                <div className="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Collections
                                </div>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to="/Spring-Summer-2018">Spring - summer - 2018</Link>
                                    <Link className="dropdown-item" to="/Fall-Winter-2017">Fall - Winter - 2017</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;


//
//
// class Navbar extends Component {
//     render() {
//         return (
//             <nav className="navbar navbar-toggleable">
//                 <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"><i className="fas fa-bars"></i></span>
//                 </button>
//                 <div className="container">
//                     <Link className="navbar-brand" to="/"><img src={logo} className="logo" alt=""/></Link>
//
//                     <div className="collapse navbar-collapse" id="navbarCollapse">
//                         <ul className="navbar-nav ml-auto">
//                             <li className="nav-item active">
//                                 <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
//                             </li>
//                             <li className="nav-item dropdown">
//                                 <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                                     Collections
//                                 </a>
//                                 <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
//                                     <Link className="dropdown-item nav-link" to="/Spring-Summer-2018">Spring - summer - 2018</Link>
//                                     <Link className="dropdown-item nav-link" to="/Fall-Winter-2017">Fall - Winter - 2017</Link>
//                                 </div>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/about">About</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/contact">Contact</Link>
//                             </li>
//
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//
//         );
//     }
// }
//
// export default Navbar;

