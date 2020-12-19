
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Location from './TopHeader/Location'
import Language from './TopHeader/Language';
import CustomerSupport from './TopHeader/CustomerSupport';
import CustomerLogin from './TopHeader/CustomerLogin';
import Logo from './MainHeader/Logo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import About from './MainHeader/Navigation/About';
import Home from './MainHeader/Navigation/Home';
import Services from './MainHeader/Navigation/Services'
import Nav from 'react-bootstrap/Nav'
import Search from './MainHeader/Search';
import Navigation from './MainHeader/Navigation/Navigation';
import MyRoute from './MainHeader/Navigation/MyRoute';
import Slider from './Carousel/Slider';
import Message from './Body/Message';
import Service from './Body/Service';
import Footer from './Footer/Footer';
import Topfooter from './Footer/Topfooter/Topfooter';



function App() {
  return (
    <div>
      <div className='container-fluid bg-dark'>
        <div className="row">
          <div className="col-4">
            <Location/>
          </div>
          <div className="col-5">
            <Language/>
            </div> 
            <div className="col-1">
            <CustomerSupport/>
            </div> 
            <div className="col-2">
            <CustomerLogin/>
            </div> 
        </div>
      </div>
      <div className="container-fluid"  style={{background:"white"}}>
        <div className="row">
          <div className="col-2">
            <Logo/>
          </div>
          <div className="col-9">
            <BrowserRouter>
            <Navigation/>
            <MyRoute/>
            </BrowserRouter>
          </div>
          <div className='col-1'>
          <Search/>
          </div>
        </div>
       
      </div>
      <div>
      
      </div>
      <div>
      <Slider/>
      </div>
      <div>
        <Message/>
      </div>
      <div>
        <Service/>
      </div>
      <div>
        <Footer/>
      </div>
      <div>
        <Topfooter/>
      </div>
     
    </div>
  );
}

export default App;
