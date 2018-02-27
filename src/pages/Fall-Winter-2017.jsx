import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import FallParallax from '../components/FallParallax.jsx';


import FallWinter from "../components/fallwinter2017";

class fallwinter extends Component {
    render() {
        return (
            <div style={{backgroundColor: 'black'}}>
                <Navbar />




                <FallParallax/>
                <div className="container" style={{textAlign : 'center', padding:0, backgroundColor: 'black'}}>
                    <FallWinter/>
                </div>
                <Footer />
            </div>
        );
    }
}

export default fallwinter;