import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import Card  from 'react-bootstrap/Card'

class Message extends Component {
    render() {
        return (
            <div className="container-fluid"style={{background:"#b3e2ec"}}>
                <div className="row">
                    <div className="col-6 mt-4 pt-2">
                    
                        <img variant="top" src="aboutus.png" height="600px" width="600px"/>

                    </div>
                    <div className="col-6 mt-4">
                        <h1>About Company</h1>
                        <h>Custom software development & web design company since 2009 in Bangladesh.
Ready software like HR, ERP, Accounting, CRM, Inventory solution and more.Roopokar is a technical agency based in Dhaka, Bangladesh. We had started website design & development in mind but with the time the canvas is widened as full service software development company. Known as the best web design company in Bangladesh. We are strategists, designers, producers and technologists who share a passion for creating great ideas and translating them into engaging user experiences, meaningful relationship with business and consumer.</h>
                    
                 </div>
                 </div>
                </div>
            
        );
    }
}

export default Message;