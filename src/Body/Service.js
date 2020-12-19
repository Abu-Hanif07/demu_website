import React, { Component } from 'react';
import Button from 'react-bootstrap/esm/Button';

class Service extends Component {
    render() {
        return (
            <div>
            <div className="container-fluid bg-white">
                <div className="row">
                    <div className="col-6">
                        <h1 style={{color:"black"}}>Latest <strong style={{color:"green"}}> Services</strong> </h1>
                       
                    </div>
                    <div className="col-6 mt-8 p-4" style={{textAlign:"center"}}>

                        <Button  style={{background:"green"
                    
                    }}>ORDER NOW</Button>
                    </div>
                </div>
                </div>
                <div className="container-fluid bg-white m-4 p-2">
                    <div className="row">
                        <div className="col-4">
                          <img src="softwaredevelopment_theitki.jpg"></img>
                          <a style={{color:"black", textAlign:"center"}} href="#" >SOFTWARE DESIGN & DEVELOPMENT</a>
                        </div>
                        <div className="col-4">
                        <img src="domainregistration_theitkin.jpg"></img><br></br>
                        <a style={{color:"black", textAlign:"center"}} href="#" >DOMAIN REGISTRATION</a>
                        </div>
                        <div className="col-4">
                        <img src="webhosting_theitking.jpg"></img> <br></br>
                        <a style={{color:"black"}} href="#">WEB HOSTING</a>
                        </div>
                    </div>
                </div>
                <div className="container-fluid bg-white m-4 p-2">
                    <div className="row">
                        <div className="col-4">
                          <img src="webdevelopment_theitking.jpg"></img><br></br>
                          <a style={{color:"black"}} href="#" >WEBSITE DESIGN & DEVELOPMENT</a>
                        </div>
                        <div className="col-4">
                        <img src="GraphicsDesign_TheItKing.jpg"></img>
                        <a style={{color:"black"}} href="#" >GRAPHICS DESIGN</a>
                        </div>
                        <div className="col-4 ">
                        <img src="eCommercesolution_theitking.jpg"></img> <br></br>
                        <a style={{color:"black"}} href="#">ECOMMERCE WEBSITE DEVELOPMENT</a>
                        </div>
                    </div>
                </div>
                <div className="container-fluid bg-white m-4 p-2">
                    <div className="row">
                        <div className="col-4">
                          <img src="AndroidAppDevelopment_TheItKing.jpg"></img>
                          <a style={{color:"black"}} href="#" >ANDROID APPS DEVELOPMENT</a>
                        </div>
                        <div className="col-4">
                        <img src="digitalmarketing_theitking-1.jpg"></img><br></br>
                        <a style={{color:"black"}} href="#" >DIGITAL MARKETING</a>
                        </div>
                        <div className="col-4 ">
                        <img src="seosmmsem_theitking.jpg"></img> <br></br>
                        <a style={{color:"black"}} href="#">SEO, SEM, SMM</a>
                        </div>
                    </div>
                </div>
                <div className="container-fluid  p-2" style={{background:"#e5f8f5"}}>
                <div className="row">
                    <div className="col-6">
                        <h1 style={{color:"black"}}>Choose <strong style={{color:"#00ff33"}}>Your Best</strong> Package </h1>
                    </div>
                    <div className="col-6 mt-8 p-4" style={{textAlign:"center"}}>

                        <Button  style={{background:"green"
                    
                    }}>ORDER NOW</Button>
                    </div>
                </div>
                </div>
                <div className="container-fluid  p-2" style={{background:"#e5f8f5"}}>
                    <div className="row">
                        <div className="col-8" style={{textAlign:"center"}}>
                          <h1>STATIC WEBSITE</h1>
                          <p>The It King offer low cost mobile friendly static website for expand your business in online.</p>
                          
                              <li>6 Static Page</li>
                              <li>.Com Domain</li>
                              <li>Standard Hosting</li>
                              <li>Smart Design</li>
                              <li>5 Corporate Email Address</li>
                              <li>24/7 Live Support</li>
                        
                          <h1>STARTING AT JUST ৳10,000/BDT</h1>
                          <Button  style={{background:"green" }}>BUY NOW</Button>
                        </div>
                        <div className="col-4">
                            <img src="staticpackage_theitking.png" height="100%" width="100%"></img>
                        </div>
                    </div>
                </div>
                <div className="container-fluid  p-2" style={{background:"#ff9696"}}>
                    <div className="row">
                        <div className="col-4">
                            <img src="dynamicpackage_theitking-1.png" height="100%" width="100%"></img>
                        </div>
                        <div className="col-8" style={{textAlign:"center"}}>
                          <h1>DYNAMIC WEBSITE</h1>
                          <p>The It King offer low cost mobile friendly dynamic website for expand your business in online.</p>
                         
                              <li>Smart Design</li>
                              <li>.Com Domain</li>
                              <li>6 Static Page</li>
                              <li>1000 MB Hosting</li>
                              <li>10 Corporate Email Address</li>
                              <li>24/7 Live Support</li>
                
                          <h1>STARTING AT JUST ৳20,000/BDT</h1>
                          <Button  style={{background:"green" }}>BUY NOW</Button>
                        </div>
                    </div>
                </div>
                <div className="container-fluid  p-2" style={{background:"#ffe4b5"}}>
                    <div className="row">
                        <div className="col-8" style={{textAlign:"center"}}>
                          <h1>ECOMMERCE WEBSITE</h1>
                          <p>The It King offer low cost mobile friendly eCommerce website for expand your business in online.</p>
                          
                              <li>6 Static Page</li>
                              <li>.Com Domain</li>
                              <li>Standard Hosting</li>
                              <li>Smart Design</li>
                              <li>5 Corporate Email Address</li>
                              <li>24/7 Live Support</li>
                        
                          <h1>STARTING AT JUST ৳30,000/BDT</h1>
                          <Button  style={{background:"green" }}>BUY NOW</Button>
                        </div>
                        <div className="col-4">
                            <img src="eCommercepackage_theitking.png" height="100%" width="100%"></img>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Service;