import React, { Component } from 'react';
import Form from './Form'
import Maps from './Maps'
import Social from './Social'

class Contact extends Component {
    render() {
        return (
            <div className="container-fluid  pt-65px pb-65px" style={{background:"#e8e9e8"}}>
                <div className="row">
                    <div className="col-6">
                    <h1>COMPANY INFO</h1>
                    <h3>The It King</h3>
                           <p>House 36, Road 2, Block L, Banani, Dhaka 1213.</p>
                           <h3>Call 24/7</h3>
                           <p>09617171971, 01759951997, 01727334877</p>
                           <h3>Email 24/7</h3>
                           <p>Info@theitking.com</p>
                           <h3>Website 24/7</h3>
                           <p>www.theitking.com</p>
                           <h3>Follow us</h3>
                           <Social/>
                           <h3>PAYMENT 24/7</h3>
                           <img src="bksh_theitking.jpg"></img>
                           <p>Bkash – 01727334877</p>
                           <img src="rocket_theitking-1.jpg"></img>
                           <p>Rocket – 019132683136</p>
                    </div>
                    <div className="col-6">
                       <Form/>
                    </div>
                </div>
                <div className="row">
                    <Maps/>
                </div>
                
                </div>
    
        
        );
    }
}

export default Contact;