import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from "../images/logo.png";


class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-toggleable">

                <div className="container">
                    <Link className="navbar-brand" to="/"><img src={logo} className="logo" alt=""/></Link>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><i className="fas fa-bars"></i></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Collections
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <Link className="dropdown-item nav-link" to="/Spring-Summer-2018">Spring - summer - 2018</Link>
                                    <Link className="dropdown-item nav-link" to="/Fall-Winter-2017">Fall - Winter - 2017</Link>
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
            </nav>
        );
    }
}

export default Navbar;
//
// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
//
// import Fade from "react-reveal/Fade";
// import Flash from "react-reveal/Flash";
// import './Navbar.css';
//
//
//
// class Navbar extends Component {
//     render() {
//         return (
//             <nav className="navbar navbar-expand-sm header sticky navbar-light bg-light mb-4">
//                 <div className="container ">
//
//
//                     <button className="navbar-toggler navbar-toggler-right ml-auto" type="button" data-toggle="collapse" data-target="#mobile-nav">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//
//                     <div className="navbar-brand jumbotron" href="#">
//                         <Flash>
//                             <h6 className="name">ERFAN ASKARI</h6>
//                         </Flash>
//                         <Fade left>
//                             <p className="describe">
//                                 Freelance Photographer and Branding Consultant based in
//                                 Tehran.
//                             </p>
//                         </Fade>
//                     </div>
//
//                     <div className="collapse navbar-collapse" id="mobile-nav">
//                         <ul className="navbar-nav ml-auto">
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/">
//                                     Home
//                                 </Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/about">
//                                     About
//                                 </Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link className="nav-link" to="/contact">
//                                     Contact
//                                 </Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//
//
//         );
//     }
// }
//
// export default Navbar;