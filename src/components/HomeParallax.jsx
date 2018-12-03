import React from 'react';
import { Parallax, Background } from 'react-parallax';
import './HomeParallax.css';
import { Link } from 'react-router-dom';

const MyComponent = () => (
    <div>
    <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={require('../images/200kb/ofoghi-(2).jpg')}
        bgImageAlt="the cat"
        strength={300}
    >
        <Link to="/Spring-Summer-2018">
            <div className="para" >
                <div className="ptext"><h1 >Summer 2018</h1></div>
            </div>
        </Link>
    </Parallax>

    <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={require('../images/200kb/ofoghi-(10).jpg')}
        bgImageAlt="the dog"
        strength={200}
    >

        <Link to="/Fall-Winter-2017">
            <div className="para" >
                <div className="ptext"><h1>Winter 2017</h1></div>
            </div>
        </Link>
    </Parallax>





    </div>
);
export default MyComponent;