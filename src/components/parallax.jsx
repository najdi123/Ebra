
import React, { Component } from 'react';
import './parallax.css';
import pic1 from '../images/01.jpg';
import pic2 from '../images/02.jpg';
import pic3 from '../images/03.jpg';
import pic4 from '../images/04.jpg';
import Navbar from "./Navbar";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import About from "../pages/About";

import { BrowserRouter as Router, Route } from 'react-router-dom';

class FlexPage extends Component {
    render() {
        return (

            <div className="h100">
                <Router>
                    <div>
                        <Route exact path="/ff" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/contact" component={Contact}/>
                        <Navbar/>
                    </div>
                </Router>

            <div className="pimg1">
                <div className="ptext">
                  <span className="border">
                    Parallax Website
                  </span>
                </div>
            </div>

            <section className="section section-light">
                <h2>Section One</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, laudantium, quibusdam? Nobis, delectus, commodi, fugit amet tempora facere dolores nisi facilis consequatur, odio hic minima nostrum. Perferendis eos earum praesentium, blanditiis sapiente labore aliquam ipsa architecto vitae. Minima soluta temporibus voluptates inventore commodi cumque esse suscipit optio aliquam et, dolorem a cupiditate nihil fuga laboriosam fugiat placeat dignissimos! Unde eveniet placeat quisquam blanditiis voluptatem doloremque fugiat dolor repellendus ratione in. Distinctio provident dolorem modi cumque illo enim quidem tempora deserunt nostrum voluptate labore repellat quisquam quasi cum suscipit dolore ab consequuntur, ad porro earum temporibus. Laborum ad temporibus ex, omnis!
            </p>
            </section>

            <div className="pimg2">
                <div className="ptext">
                  <span className="border trans">
                    Image Two Text
                  </span>
                </div>
            </div>

            <section className="section section-dark">
                <h2>Section Two</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, laudantium, quibusdam? Nobis, delectus, commodi, fugit amet tempora facere dolores nisi facilis consequatur, odio hic minima nostrum. Perferendis eos earum praesentium, blanditiis sapiente labore aliquam ipsa architecto vitae. Minima soluta temporibus voluptates inventore commodi cumque esse suscipit optio aliquam et, dolorem a cupiditate nihil fuga laboriosam fugiat placeat dignissimos! Unde eveniet placeat quisquam blanditiis voluptatem doloremque fugiat dolor repellendus ratione in.
            </p>
            </section>

            <div className="pimg3">
                <div className="ptext">
                  <span className="border trans">
                    Image Three Text
                  </span>
                </div>
            </div>

            <section className="section section-dark">
                <h2>Section Three</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, laudantium, quibusdam? Nobis, delectus, commodi, fugit amet tempora facere dolores nisi facilis consequatur, odio hic minima nostrum. Perferendis eos earum praesentium, blanditiis sapiente labore aliquam ipsa architecto vitae. Minima soluta temporibus voluptates inventore commodi cumque esse suscipit optio aliquam et, dolorem a cupiditate nihil fuga laboriosam fugiat placeat dignissimos! Unde eveniet placeat quisquam blanditiis voluptatem doloremque fugiat dolor repellendus ratione in.
            </p>
            </section>

            <div className="pimg1">
                <div className="ptext">
                  <span className="border">
                    Traversy Media
                  </span>
                </div>
            </div>

            </div>
        );
    }
}

export default FlexPage;