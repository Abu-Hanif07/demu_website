import React, { Component } from 'react';
import Nav from 'react-bootstrap/esm/Nav';

class Language extends Component {
    render() {
        return (
            <div>
                       <Nav>
                       <Nav.Item>
                      <Nav.Link style={{color:"white"}} href="/englisj">ENGLISH</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                      <Nav.Link style={{color:"white"}} href="/bangla">বাংলা</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                      <Nav.Link style={{color:"white"}} href="/русский">PYCCKNN</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                      <Nav.Link style={{color:"white"}} href="/espanol">ESPANOL</Nav.Link>
                        </Nav.Item>
                        </Nav>
            </div>
        );
    }
}

export default Language;