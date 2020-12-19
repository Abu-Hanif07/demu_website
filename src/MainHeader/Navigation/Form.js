import React, { Component } from 'react';

class Form extends Component {
    constructor(){
        super();
        this.state={
            fname:"",
            lname:"",
            email:"",
            mobile:""
        }
    }
        onchangeHolder(event){
            var inputName=event.target.name
            var inputValue=event.target.value
            this.setState({[inputName]:inputValue});
            

            if (inputName==="fname"){
                var namepattern=/^([a-zA-Z]){2,30}$/;
                if(!namepattern.test(inputValue)){
                    this.setState({fname:"First Name is not Valid"});
                }
            }

            if (inputName==="lname"){
                var namepattern=/^([a-zA-Z]){2,30}$/;
                if(!namepattern.test(inputValue)){
                    this.setState({lname:"Last Name is not Valid"});
                }
            }

            if(inputName==="email"){
                var emailpattern=/\s+@\s+\.\s+/;
                if(!emailpattern.test(inputValue)){
                    this.setState({email:"Email is not found"});
                }
            }

            if(inputName==="mobile"){
                if(!Number(inputValue)){
                    this.setState({mobile:"Mobile is not valid"})
                }
            }

        }

    render() {
        return (
            <div>
            <h1>GET IN TOUCH</h1>
                <p>We would love to hear from you and answer any questions you may have. Just email us, we are here for you 24/7.</p>
                <form style={{
            textAlign:"left"}}>
                <p>Your Name (required)</p>
                    <input onChange={this.onchangeholder} name="fname" type="text" placeholder="Your Name" ></input> <br></br>
                    <p>Your Email (required)</p>
                    <input onChange={this.onchangeholder}   name="email" type="text" placeholder="Your Email"></input> <br></br>
                    <p>Subject</p>
                    <input onChange={this.onchangeholder}  name="lname" type="text" placeholder=""></input> <br></br>
                    <p>Your Message</p>
                    <input onChange={this.onchangeholder}  name="mobile" type="text" placeholder="Write your message"></input> <br></br>
                    <input style={{background:"green", border:'4px', padding:'4px'}} name="submit" type="submit" value="Send"></input><br></br>
                </form>
            </div>
        );
    }
}

export default Form;