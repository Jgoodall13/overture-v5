import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class JumpAround extends Component {
    render(){
        return (
            <div className="jump-div container">
                <ul className="jump-list">
                    <li id="na-jump-link" className="jump-link"><strong>Jump to:</strong></li>
                    <Link to="/team/experts" className="jump-link">The Experts</Link>
                    <Link to="/team/sales" className="jump-link">Sales Staff</Link>
                    <Link to="/team/e-commerce" className="jump-link">E-Commerce</Link>
                    <Link to="/team/creative" className="jump-link">Creative</Link>
                    <Link to="/team/operations" className="jump-link">Operations & Logistics</Link>
                    <Link to="/team/embrodiery" className="jump-link">Embroidery & Screen Printing</Link>
                    <Link to="/team/warehouse" className="jump-link">Warehouse</Link>
                </ul>
            </div>
        )
    }
}

export default JumpAround;