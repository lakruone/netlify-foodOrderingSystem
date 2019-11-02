import React,{Component} from 'react';
import { Row, Col, Input, Button, Card, CardBody, Link} from 'mdbreact';
import NavBarMain from '../../src/components/Navbarmain';
import { withRouter } from 'react-router-dom';


//import img from "../../components/Imges/img21.jpg";

//import './Signup.css';
import AuthService from '../../src/Auth/AuthService';
const token= localStorage.getItem('token');

class Companyregister extends Component{

    constructor() {
        super();
        this.state = {
            fname: "",
            lname: "",
            mobile:"",
            address:"",
            email: "",
            password: "",
            confirmPassword: "",
            errors: {}
        }

        this.handleFName = this.handleFName.bind(this);
        this.handleLName = this.handleLName.bind(this);
        this.handleMobile = this.handleMobile.bind(this);
        this.handleAddress = this.handleAddress.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handlePassConf = this.handlePassConf.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleFName(e) {
        this.setState({
            fname: e.target.value
        })
    }
    handleLName(e) {
        this.setState({
            lname: e.target.value
        })
    }
    handleMobile(e) {
        this.setState({
            mobile: e.target.value
        })
    }
    handleAddress(e) {
        this.setState({
            address: e.target.value
        })
    }
    handleEmail(e) {
        this.setState({
            email: e.target.value
        })
    }
    handlePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    handlePassConf(e) {
        this.setState({
            confirmPassword: e.target.value
        })
    }

    //e-event
    handleSubmit(e,b) {
        e.preventDefault();

        const a=this.refs.emailref.value;
        console.log("clicked ")
        //console.log(a)

       var emailcheck=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
       //var test2=emailcheck.test(this.state.companyEmail);
       // var test4=emailcheck.test(this.state.signupaltemail);
        var test3=this.state.password.length<4
        var pwcheck = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/;
        var test1 = pwcheck.test(this.state.password);


    // if(!test2 || !test4)
    // {window.alert("invalid email");
   // inputEmail4.style.border="1px solid red";
// }

   // else
    {
    if(test3)
    {window.alert("Password is Weak..make sure it has minimum of 5 characters");}
     else
     {
      if(!test1)
      {window.alert("Password is Weak..make sure it has all valid characters");}
      else
      {
         if(this.state.password!==this.state.confirmPassword)
         {window.alert("please confirm your password correctly")}
         else
     {

        const user = {
            firstName: this.state.fname,
            lastName: this.state.lname,
            mobileNo: this.state.mobile,
            address: this.state.address,
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword
        }
        console.log(user);
        //company register - backend admin.js
        fetch('http://localhost:5000/user/register', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": "bearer "+ token

              },
            body: JSON.stringify(user)
          })

          .then(function(response) {
                console.log(response);
                if (response.status === 200) {

                    window.alert('Signed up successfully..!')
                   b.history.push('/login');
                  //  window.location.reload();

                 }
                else if (response.status === 403)
                {
                    console.log("damn");
                    window.alert("Email already registered");
                }
                else if (response.status === 402)
                {
                    console.log("damn");
                    window.alert("Password must more than 8 charactors");
                }
                else if (response.status === 400)
                {
                    console.log("damn");
                    window.alert("Password do not match");
                }

          })



    }
      }}}
    }
    render(){

        return(
            <div  style={{ width:"1520px", opacity:"0.9", marginLeft:"205px", height:"1000px",marginBottom:"-110px",  marginTop:"65px" ,backgroundAttachment:"fixed" ,backgroundSize:"100%",backgroundRepeat:"no-repeat", backgroundPosition:"fixed"}}>

              <NavBarMain/>
            <Row>
           <Col md="10">

              <CardBody className="example z-depth-5" style={{ borderRadius: '20px', marginTop: '-50px', width: '600px',backgroundColor:"rgba(238,242,246,0.7)", marginBottom:"100px", border:"1px solid blue"}}>

            <form onSubmit={ this.handleSubmit }>
            <p className="h5 text-center mb-4"> Register</p>
                <div className="form-group">
                    <Input
                    label="First Name" icon="user"
                    validate error="wrong" success="right"
                    type="text"
                    className="form-control"
                    name="name"
                    onChange={ (e) => this.handleFName(e) }
                    value={ this.state.fname }
                    />
                </div>
                <div className="form-group">
                    <Input
                    label="Last Name" icon="user"
                    validate error="wrong" success="right"
                    type="text"
                    className="form-control"
                    name="name"
                    onChange={ (e) => this.handleLName(e) }
                    value={ this.state.lname }
                    />
                </div>
                <div className="form-group">
                    <Input
                    label="Mobile No" icon="phone"
                    validate error="wrong" success="right"
                    type="number"
                    className="form-control"
                    name="name"
                    onChange={ (e) => this.handleMobile(e) }
                    value={ this.state.mobile }
                    />
                </div>
                <div className="form-group">
                    <Input
                    label="Address" icon="envelope"
                    validate error="wrong" success="right"
                    type="text"
                    className="form-control"
                    name="name"
                    onChange={ (e) => this.handleAddress(e) }
                    value={ this.state.address }
                    />
                </div>

                <div className="form-group">
                    <Input
                    label="Email" icon="envelope"
                    validate error="wrong" success="right"
                    type="email"
                    className="form-control"
                    name="email"
                    onChange={ (e) => this.handleEmail(e) }
                    value={ this.state.email }
                    ref="emailref"
                    />
                </div>
                <div className="form-group">
                    <Input
                    type="password"
                    label="Password" icon="lock"
                    validate
                    className="form-control"
                    name="password"
                    onChange={ (e) => this.handlePassword(e) }
                    value={ this.state.password }
                    />
                </div>
                <div className="form-group">
                    <Input
                    type="password"
                    label="Confirm password" icon="exclamation-triangle"
                    validate error="wrong" success="right"
                    className="form-control"
                    name="password_confirm"
                    onChange={ (e) => this.handlePassConf(e) }
                    value={ this.state.confirmPassword }
                    />
                </div>
                <div className="text-center" style={{color:'white', width: '200px', marginLeft:"90px"}}>

                    <Button type="submit" onClick={(e)=> this.handleSubmit(e,this.props)}>Register</Button>
                </div>
            </form>
            </CardBody>

          </Col>
        </Row>
        {/* <Footerpage/> */}
        </div>

        );
    }
}

export default withRouter(Companyregister);
