import React, { Component } from 'react';
import Footer from '../components/Footer.jsx';
import Navbar from '../components/Navbar.jsx';
import Carousel from "../components/Carousel.jsx";



class Home extends Component {
    render() {
        return (
            <div >
                <Navbar />

                <div className="container-fluid" style={{textAlign : 'center'}}>
                    <div className="row">
                        <div className="col-sm-12" style={{padding : 0}}>
                            <Carousel/>
                        </div>

                    </div>


                </div>
                <Footer />
            </div>
        );
    }
}

export default Home;