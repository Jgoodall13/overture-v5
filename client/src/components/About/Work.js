import React from 'react';
import { Parallax, Background } from 'react-parallax';
import HowImage from '../../images/about/howwework.jpg';
import WhereImage from '../../images/about/wherewework.jpg';
import Computer from '../../images/about/computer_screen.png'

const Work = () => {
    return (
        <div>
            <Parallax bgImage={HowImage} strength={700}>
            <div style={{ height: 500 }}>
                <div className="how-box">
                    <h4 className="about-orange-words">How we work.</h4>
                    <p className="basic">We're always streamlining processes and improving quality by leveraging out full suite of in-house services, including domestic and international sourcing of promotional products, graphic design, web devlopment, on-site screen printing and embroidery, 100,000 square feet of warehouse space, kit assembly, packing, and domestic and international shipping.</p>
                </div>
            </div>
            </Parallax>
            <div className="container">
                <div className="row">
                    <div className="col-md-7 company-stores">
                        <h4 className="about-blue-words">Company stores.</h4>
                        <p className="basic">We create elegant, easy to use, leading edge webstores which give our customers and easy-to-use platform for ordering branded merchandise, with marketing support and detailed reporting.</p>
                    </div>
                    <div className="col-md-5">
                        <img src={Computer} style={{width: '100%'}} />
                    </div>
                </div>
            </div>
            <Parallax bgImage={WhereImage} strength={500}>
            <div style={{ height: 500 }}>
                <div className="where-box">
                    <h4 className="about-orange-words">Where we work.</h4>
                    <h4 className="thin-orange-words">(Hint: everywhere.)</h4>
                    <p className="basic">The magic starts in our offices in Chicago and Dallas, and our partner’s office in Montreal, then spreads to all the places around the world that you need to reach. To help reduce your costs, we create import sourcing programs for large quantity and custom orders, and we regularly import from our accredited factories overseas. International shipments leave our warehouse daily.</p>
                </div>
            </div>
            </Parallax>
        </div>
    )
}

const insideStyles = {
    background: "white",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  };

export default Work