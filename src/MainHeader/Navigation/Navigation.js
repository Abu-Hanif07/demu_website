import React, { Component } from 'react';
import Nav from 'react-bootstrap/esm/Nav';
import Navbar from 'react-bootstrap/esm/Navbar';
import { Link,NavLink } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown'

class Navigation extends Component {
    render() {
        return (
            <div>
                  <Navbar>
           <div>
                <Link  to="/">
                <Nav.Item>
                      <Nav.Link style={{color:"black"}} href="/">HOME</Nav.Link>
                         </Nav.Item>
                </Link>
          </div>
             <div>
                  
         <Link to="/about">    
             <Nav style={{color:"black"}}>
               <NavDropdown title="ABOUT" id="basic-nav-dropdown">
                 <NavDropdown.Item href="#action/3.1">ABOUT US</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">PEOPLE</NavDropdown.Item>
          
                </NavDropdown>
             </Nav>
       </Link>
      </div>
                       
             <Link to="/services">
          <Nav>
        <NavDropdown title="SERVICES" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">WEBSITE DESIGN AND DEVELOPMENT</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">SOFTWARE DEVELOPMENT</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">STRATEGY & CONSULTING</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">FACEBOOK APPLICATION DEVELOPMENT</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.5">DIGITAL MARKETING</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.6">SEARCH ENGINE OPTIMIZATION(SEO)</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.7">IT SERVICES OUTSOURCING</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.8">PHP-LARAVEL DEVELOPMENT</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.9">WORDPRESS WEBSITE DEVELOPMENT</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.10">IT SOLUTION</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.11">MOBILE APP DEVELOPMENT</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.12">BROCHURE DESIGN</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.13">DIARY AND CALENDAR DESIGN</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.14">VIDEO PRODUCTION</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.15">PRODUCT PHOTOGRAPHY</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.16">WEBSITE HOSTING</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.17">WEBSITE MAINTAINANCE </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.18">DOMAIN REGISTRATION</NavDropdown.Item>
        </NavDropdown>
        </Nav>
        </Link>
                  <Link  to="/product">
         <Nav>
        <NavDropdown style={{color:"black"}} title="PRODUCT">
        <NavDropdown.Item href="#action/4.1">EPR SYSTEM</NavDropdown.Item>
        <NavDropdown.Item href="#action/4.2">HR SOFTWARE</NavDropdown.Item>
        <NavDropdown.Item href="#action/4.3">POS SOFTWARE</NavDropdown.Item>
        <NavDropdown.Item href="#action/4.4">ACCOUNTING SOFTWARE</NavDropdown.Item>
        <NavDropdown.Item href="#action/4.5">INVENTORY MANAGEMENT SOFTWARE</NavDropdown.Item>
        <NavDropdown.Item href="#action/4.6">CRM SOFTWARE</NavDropdown.Item>
        <NavDropdown.Item href="#action/4.7">COMMERCIAL SOFTWARE</NavDropdown.Item>
        <NavDropdown.Item href="#action/4.8">DIGITAL ASSET MANAGEMENT SOFTWARE</NavDropdown.Item>
        <NavDropdown.Item href="#action/4.9">E-COMMERCE SOLUTION(WOOCOMMERCE)</NavDropdown.Item>
        <NavDropdown.Item href="#action/4.10">E-COMMERCE SOLUTION(LARAVEL)</NavDropdown.Item>
        <NavDropdown.Item href="#action/4.11">INFRARED THERMOMETER</NavDropdown.Item>
        <NavDropdown.Item href="#action/4.12">THERMAL CAMERA</NavDropdown.Item>
        </NavDropdown>
        </Nav>
                  </Link>

                  <Link style={{color:"black"}} to="/portfolio">
                  <Nav.Item>
                      <Nav.Link style={{color:"black"}} href="/portfolio">PORTFOLIO</Nav.Link>
                         </Nav.Item>
                  </Link>

                  <Link  to="/clients">
                  <Nav.Item>
                          <Nav.Link style={{color:"black"}} href="/clients">CLIENTS</Nav.Link>
                   </Nav.Item>
                
                 </Link>
                  <Link  to="/blog">
                    <Nav.Item>
                        <Nav.Link style={{color:"black"}} href="/blog">BLOG</Nav.Link>
                   </Nav.Item>      
                 </Link>
                  <Link  to="/career">
                  <Nav.Item>
                     <Nav.Link style={{color:"black"}} href="/career">CAREER</Nav.Link>
                  </Nav.Item>
                  </Link>
                  <NavLink to="/contact">Contact Us</NavLink>

                  

             </Navbar>
            </div>
        );
    }
}

export default Navigation;