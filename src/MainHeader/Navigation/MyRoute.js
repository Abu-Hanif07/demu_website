import React, { Component } from 'react';
import Switch from 'react-bootstrap/esm/Switch';
import { Route, Router } from 'react-router-dom';
import About from './About';
import Blog from './Blog';
import Career from './Career';
import Clients from './Clients';
import Contact from './Contact';
import Home from './Home';
import Portfolio from './Portfolio';
import Product from './Product';
import Services from './Services';

class MyRoute extends Component {
    render() {
        return (
            <div className="content"> 
          
                <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route  path="/about" component={About}></Route>
                <Route  path="/services" component={Services}></Route>
                <Route  path="/product" component={Product}></Route>
                <Route  path="/portfolio" component={Portfolio}></Route>
                <Route  path="/clients" component={Clients}></Route>
                <Route  path="/blog" component={Blog}></Route>
                <Route  path="/career" component={Career}></Route>
                <Route  path="/contact" component={Contact}></Route>
                
                </Switch>
          
            </div>
        );
    }
}

export default MyRoute;