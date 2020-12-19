import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { MenuComponent } from '@syncfusion/ej2-react-navigations';
import { Router } from 'react-router-dom';

class Logo extends Component {

    

    render() {
        return (
            <div>
                 
                        <img src="logo-roopokar.png" alt="logo"></img>
                    </div>
                     
                );
    }
}

export default Logo;