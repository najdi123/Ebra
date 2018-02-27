import Lightbox from 'react-image-lightbox';
import React from 'react';
import './lightbox.css';

import pic1 from "../images/ebra winter/50/01.jpg";
import pic2 from "../images/ebra winter/50/02.jpg";
import pic3 from "../images/ebra winter/50/03.jpg";
import pic4 from "../images/ebra winter/50/04.jpg";
import pic5 from "../images/ebra winter/50/05.jpg";
import pic6 from "../images/ebra winter/50/06.jpg";
import pic7 from "../images/ebra winter/50/07.jpg";
import pic8 from "../images/ebra winter/50/08.jpg";
import pic9 from "../images/ebra winter/50/09.jpg";
import pic10 from "../images/ebra winter/50/010.jpg";
import pic11 from "../images/ebra winter/50/011.jpg";
import pic12 from "../images/ebra winter/50/012.jpg";
import pic13 from "../images/ebra winter/50/013.jpg";
import pic14 from "../images/ebra winter/50/014.jpg";
import pic15 from "../images/ebra winter/50/015.jpg";

import pic17 from "../images/ebra winter/50/017.jpg";
import pic18 from "../images/ebra winter/50/018.jpg";

import pic20 from "../images/ebra winter/50/020.jpg";
import pic21 from "../images/ebra winter/50/021.jpg";
import pic22 from "../images/ebra winter/50/022.jpg";
import pic23 from "../images/ebra winter/50/023.jpg";
import pic24 from "../images/ebra winter/50/024.jpg";
import pic25 from "../images/ebra winter/50/025.jpg";
import pic26 from "../images/ebra winter/50/026.jpg";
import pic27 from "../images/ebra winter/50/027.jpg";
import pic28 from "../images/ebra winter/50/028.jpg";

import pic01 from "../images/ebra winter/200/01.jpg";
import pic02 from "../images/ebra winter/200/02.jpg";
import pic03 from "../images/ebra winter/200/03.jpg";
import pic04 from "../images/ebra winter/200/04.jpg";
import pic05 from "../images/ebra winter/200/05.jpg";
import pic06 from "../images/ebra winter/200/06.jpg";
import pic07 from "../images/ebra winter/200/07.jpg";
import pic08 from "../images/ebra winter/200/08.jpg";
import pic09 from "../images/ebra winter/200/09.jpg";
import pic010 from "../images/ebra winter/200/010.jpg";
import pic011 from "../images/ebra winter/200/011.jpg";
import pic012 from "../images/ebra winter/200/012.jpg";
import pic013 from "../images/ebra winter/200/013.jpg";
import pic014 from "../images/ebra winter/200/014.jpg";
import pic015 from "../images/ebra winter/200/015.jpg";

import pic017 from "../images/ebra winter/200/017.jpg";
import pic018 from "../images/ebra winter/200/018.jpg";

import pic020 from "../images/ebra winter/200/020.jpg";
import pic021 from "../images/ebra winter/200/021.jpg";
import pic022 from "../images/ebra winter/200/022.jpg";
import pic023 from "../images/ebra winter/200/023.jpg";
import pic024 from "../images/ebra winter/200/024.jpg";
import pic025 from "../images/ebra winter/200/025.jpg";
import pic026 from "../images/ebra winter/200/026.jpg";
import pic027 from "../images/ebra winter/200/027.jpg";
import pic028 from "../images/ebra winter/200/028.jpg";





const images = [pic01, pic02, pic03, pic04, pic05, pic06, pic07, pic08, pic09, pic010, pic011, pic012, pic013, pic014, pic015, pic017, pic018, pic020, pic021, pic022, pic023, pic024, pic025, pic026, pic027, pic028];

class IndiLightbox extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
    }

    render() {

        const { photoIndex, isOpen } = this.state;

        return (
            <div style={{backgroundColor: 'black'}}>


                {!isOpen &&
                <div className="image-display">

                    <img alt="lightbox" src={pic1} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:0 })} />
                    <img alt="lightbox" src={pic2} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:1 })} />
                    <img alt="lightbox" src={pic3} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:2 })} />
                    <img alt="lightbox" src={pic4} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:3 })} />
                    <img alt="lightbox" src={pic5} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:4 })} />
                    <img alt="lightbox" src={pic6} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:5 })} />
                    <img alt="lightbox" src={pic7} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:6 })} />
                    <img alt="lightbox" src={pic8} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:7 })} />
                    <img alt="lightbox" src={pic9} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:8 })} />
                    <img alt="lightbox" src={pic10} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:9 })} />
                    <img alt="lightbox" src={pic11} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:10 })} />
                    <img alt="lightbox" src={pic12} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:11 })} />
                    <img alt="lightbox" src={pic13} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:12 })} />
                    <img alt="lightbox" src={pic14} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:13 })} />
                    <img alt="lightbox" src={pic15} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:14 })} />

                    <img alt="lightbox" src={pic17} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:15 })} />
                    <img alt="lightbox" src={pic18} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:16 })} />

                    <img alt="lightbox" src={pic20} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:17 })} />
                    <img alt="lightbox" src={pic21} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:18 })} />
                    <img alt="lightbox" src={pic22} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:19 })} />
                    <img alt="lightbox" src={pic23} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:20 })} />
                    <img alt="lightbox" src={pic24} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:21 })} />
                    <img alt="lightbox" src={pic25} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:22 })} />
                    <img alt="lightbox" src={pic26} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:23 })} />
                    <img alt="lightbox" src={pic27} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:24 })} />
                    <img alt="lightbox" src={pic28} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:25 })} />



                </div>

                }
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                        }
                    />
                )}
            </div>
        );
    }
}

export default IndiLightbox;