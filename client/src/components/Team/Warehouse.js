import React, { Component } from 'react';
import Modal from 'react-modal';
import {Element} from "react-scroll";
import Employee from './Employee';
import { People } from './people/Warehouse';
import PlaceHolder from '../../images/team/ExpertsPhotos/PortraitPlaceholder.png'

import '../../styles/Team.css'

class Warehouse extends Component {

    state = {
        showModal: [false]
    };

    componentWillMount() {
        Modal.setAppElement('body');
    }
     
    openModal = (index) => {
        const arr = [...this.state.showModal]
        arr[index] = true
        this.setState({showModal: arr});
    }
     
    closeModal = (index) => {
        this.setState({showModal: false});
    }

    render(){
        return (
            <div className="container">
                <Element id="warehouse-orange">Warehouse</Element>
                <div className="row">
                    <Employee image={People.Mario.image} name={People.Mario.name} title={People.Mario.title} />
                    <Employee image={People.Michelle.image} name={People.Michelle.name} title={People.Michelle.title} />
                    <Employee image={People.Mayla.image} name={People.Mayla.name} title={People.Mayla.title} />
                    <Employee image={People.MattC.image} name={People.MattC.name} title={People.MattC.title} />
                    <Employee image={People.MattN.image} name={People.MattN.name} title={People.MattN.title} />
                    <Employee image={People.Elijah.image} name={People.Elijah.name} title={People.Elijah.title} />
                    <Employee image={People.Lupe.image} name={People.Lupe.name} title={People.Lupe.title} />
                    <Employee image={People.Will.image} name={People.Will.name} title={People.Will.title} />
                    <Employee image={People.Yeni.image} name={People.Yeni.name} title={People.Yeni.title} />
                    <Employee image={People.Juvenita.image} name={People.Juvenita.name} title={People.Juvenita.title} />
                    <Employee image={People.Jeff.image} name={People.Jeff.name} title={People.Jeff.title} />
                    <Employee image={People.Karla.image} name={People.Karla.name} title={People.Karla.title} />
                    <Employee image={People.Abi.image} name={People.Abi.name} title={People.Abi.title} />
                    <Employee image={People.Juan.image} name={People.Juan.name} title={People.Juan.title} />
                    <Employee image={People.Salvador.image} name={People.Salvador.name} title={People.Salvador.title} />
                    <Employee image={People.Amberlie.image} name={People.Amberlie.name} title={People.Amberlie.title} />
                    <Employee image={People.Ismeal.image} name={People.Ismeal.name} title={People.Ismeal.title} />
                </div>
            </div>
        )
    }
}



export default Warehouse;
