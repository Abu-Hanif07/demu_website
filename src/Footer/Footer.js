import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";





class Footer extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid" style={{background:"#1c1717"}}>
                    <div className="row">
                        <div className="col-3 pt-4">
                           <h style={{color:"white"}}>COMPANY OVERVIEW</h>
                           <p style={{color:"gray"}}>The It King is an IT enabled Web and IT training institute service providing company in Bangladesh. The It King provides two major types of service. One is Web Solution that consists of high quality Web Design & Development, Website Maintenance, Digital Marketing, E-Commerce Solutions, CMS Solutions, PHP Web Application Development, Software Development, Graphic Design, Search Engine Optimization (SEO), Managed Web Hosting Service and Domain Registration Service.</p>
                           <a href="#">Read More</a>
                        </div>
                        <div className="col-3 pt-4">
                        <h style={{color:"white",}}>QUICK LINKS-1</h><br></br>
                           <a style={{color:"gray"}} href="#">Company Overview</a><br></br>
                           <a style={{color:"gray"}} href="#">Mission & Vision</a><br></br>
                           <a style={{color:"gray"}} href="#">Domain Registration</a><br></br>
                           <a style={{color:"gray"}} href="#">E-Commerce Development</a><br></br>
                        </div>
                        <div className="col-3 pt-4">
                        <h style={{color:"white",}}>QUICK LINKS-2</h><br></br>
                           <a style={{color:"gray"}} href="#">Facebook Marketing</a><br></br>
                           <a style={{color:"gray"}} href="#">Graphic Design</a><br></br>
                           <a style={{color:"gray"}} href="#">Inventory Management Software</a><br></br>
                           <a style={{color:"gray"}} href="#">Responsive Web Design</a><br></br>
                        </div>
                        <div className="col-3 pt-4">
                        <h style={{color:"white"}}> NEWSLETTER</h><br></br> 
                        <form>
                            <label type="text" id="email" placeholder="Your Mail">
                                <button >GO</button>
                            </label>
                        </form>

                        <h style={{color:"white"}}>FOLLOW US</h>
                        <br></br>
                        <div  style={{color:"white"}}>
      
                <a href="https://www.youtube.com/watch?v=f34peQ-41Y4&list=PLm64fbD5Onxti7DiUkX3UX3P2tuiEw30E"
               className="youtube social m-2 p-2">
                <FontAwesomeIcon icon={faYoutube} size="3x" /></a>
                  <a href="https://www.facebook.com/learnbuildteach/"
                      className="facebook social p-2">
                   <FontAwesomeIcon icon={faFacebook} size="3x" /></a>
                <a href="https://www.twitter.com/jamesqquick" className="twitter social p-2">
              <FontAwesomeIcon icon={faTwitter} size="3x" /></a>
                < a href="https://www.instagram.com/learnbuildteach"
                               className="instagram social p-2">
                        <FontAwesomeIcon icon={faInstagram} size="3x" />
                                            </a>
                                            </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Footer;