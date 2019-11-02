
import React, { Component } from 'react';
import { Row, Col, Input, Button,Card ,CardBody,Fa,ModalFooter} from 'mdbreact';
import { Link } from 'react-router-dom';
import NavBarMain from '../../src/components/Navbarmain';
import axios from 'axios';

import AuthService from '../../src/Auth/AuthService';


//import img from "../../components/Imges/img21.jpg";

class Login extends Component {

    constructor() {
        super();
        // this.state = {

        //     email: '',
        //     password: '',
        //     errors: {},
        //     companyNames:[]
        // }
       // this.handleCompanyChange = this.handleCompanyChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.Auth = new AuthService();
    }

    componentWillMount(){
      if(this.Auth.loggedIn())
          this.props.history.replace('/login');
  }

    handleEmailChange(e) {
        this.setState({
        email: e.target.value
        })
    }
    handlePasswordChange(e) {
        this.setState({
        password: e.target.value
        })
    }

    handleSubmit(e){
      e.preventDefault();

      this.Auth.login(this.state.email,this.state.password)
          .then(res =>{
            console.log(res.userType)
            if(res.userType==2){
              this.props.history.push('/customerhome');
            }
            if(res.userType==1){
               this.props.history.push('/adminhome');
            }

          })
        //   .then(res =>{
        //     console.log(res)
        //       if(res.status===200){
        //         window.alert('Signed up successfully..!')
        //         this.props.history.push('/adminhome');
        //       }
        //       else if (res.status === 404)
        //       {
        //           console.log("damn");
        //           window.alert("No user found");
        //       }
        //      else if (res.status === 400)
        //       {
        //           console.log("damn");
        //           window.alert("Password did not match");
        //       }
        //   })
          .catch(err =>{
              alert(err);
          })
  }

  //   handleCompanyChange(e) {
  //     this.setState({
  //       companyNames: e.target.value
  //     })
  // }

    //e-event
    // handleSubmit(e) {
    //     e.preventDefault();
    //   // console.log(this.state.email);
    //    //console.log(this.state.password);

    //     const user = {
    //        // company: this.state.company,
    //         email: this.state.email,
    //         password: this.state.password,
    //     }
    //     console.log(user,"dfgh");



    //        fetch("http://localhost:5000/user/login",{
    //         method:"POST",
    //         headers: {
    //           "Content-Type": "application/json"
    //         },
    //         body:JSON.stringify(user)

    //       })
    //       .then(res => res.json()) .then(data =>{
    //         if(data.success){
    //           window.alert('Login successfull!')
    //               this.props.history.push('/') //redirect
    //               this.setState({
    //                auth:true
    //              })
    //              localStorage.setItem('Token',data.Token)
    //              console.log(localStorage.Token)
    //               this.props.checkauth()
    //         }else{
    //           console.log("damn");
    //           window.alert('Login Failed!')
    //         }
    //       })
    //       .catch(function() {
    //         console.log('error handling');
    //     });
    //  }




    // //company dropdown list
    // componentDidMount(){
    //     fetch('http://localhost:5000/user/getCompanies', {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //           }

    //       })
    //       .then(function(response) {
    //         return response.json();
    //       })
    //       .then((data)=> {
    //         this.setState({
    //             companyNames:data
    //         });
    //       })

   // }

    render() {
        //drop down list mapped
        // console.log(this.state.companyNames)
        // const {errors} = this.state;

        // let companyNames = this.state.companyNames;
        // let optionItems = companyNames.map((item) =>
        //         <option key={item.companyName}>{item.companyName}</option>
        //     );
        return(


            <div  style={{ marginLeft:"120px", height:"500px", marginTop:"100px", backgroundSize:"100%",backgroundRepeat:"no-repeat", backgroundPosition:"fixed"}} >
            {/* {this.state.companyNames.map((item) =>
                <div>

                    <p>{item.companyName}</p>
                </div> )} */}

        <NavBarMain/>
        {/* <BackgroudImage/> */}
        {/* <div className="bgn"></div> */}
        <div className="container1" style={{ width: '800px' }}>

        <Row>
          <Col md="6">

            <CardBody className="example z-depth-5" style={{ marginLeft:"130px", marginTop: '-30px',border:"radius",width: '400px',backgroundColor:"rgba(238,242,246,0.8)", marginBottom:"100px", borderRadius:"20px", border:"1px solid blue"}}>

          <p className="h5 text-center mb-4">Sign In</p>
            <form action="/abc">
                <div className="form-group">
                    <Input
                    icon="envelope"
                    type="email"
                    validate error="wrong" success="right"
                    label="Type your email"
                    className="form-control"
                    name="email"
                    onChange={ (e) => this.handleEmailChange(e) }
                   // value={ this.state.email }
                    />
                </div>
                <div className="form-group">
                    <Input
                    icon="lock"
                    type="password"
                    validate
                    label="Type your password"
                    className="form-control"
                    name="password"
                    onChange={ (e) => this.handlePasswordChange(e) }
                   // value={ this.state.password }
                    />
                </div>
                {/* <div className="form-group">
                    <select className="browser-default custom-select" name="company" >
                    <option>Select your Company</option>
                    {optionItems}
                      </select>
                </div>
                 */}
                {/* <p className="font-small blue-text d-flex justify-content-end pb-3"><a href="/fogotpassword" className="blue-text ml-1">Forgot Password?</a></p> */}
                <div className="text-center" style={{color:'white', width: '200px', marginLeft:"40px"}}>
                <Button type="submit" onClick={ this.handleSubmit.bind(this) } gradient="blue" className="btn-block z-depth-1a">Login </Button>
              </div>
                {/* <p className="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2"> or Sign in with:</p> */}

                  {/* <div className="row my-3 d-flex justify-content-center">
                    <a color="white"  className="fa-2x p-2 m-2 fb-ic"><Fa icon="facebook" className="blue-text text-center" /></a>
                    <a color="white"  className="fa-2x p-2 m-2 tw-ic"><Fa icon="twitter" className="blue-text" /></a>
                    <a color="white"  className="fa-2x p-2 m-2 gplus-ic"><Fa icon="google-plus" className="blue-text" /></a>
                    <Badge color="green" pill><Fa icon="apple" size="2x" aria-hidden="true"/></Badge>
                  </div> */}<br/>

                  <ModalFooter className="mx-7 pt-3 mb-1">
                  <p className="font-small grey-text d-flex justify-content-end">Create a New Company: <Link className="blue-text ml-1" to="/register"> Register Now</Link></p>
                </ModalFooter>
            </form>
            </CardBody>

            </Col>
        </Row>

            {/*
               <Container>
        <Row>
          <Col md="6">
            <form>
              <p className="h5 text-center mb-4">Sign in</p>
              <div className="grey-text">
                <Input label="Type your email" icon="envelope" group type="email" validate error="wrong" success="right"/>
                <Input label="Type your password" icon="lock" group type="password" validate/>
              </div>
              <div className="text-center">
                <Button>Login</Button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
            */}
            </div>
            {/* <Footerpage/> */}
        </div>
        )
    }
}

export default Login;
