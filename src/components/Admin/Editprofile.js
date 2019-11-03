import React, { Component } from 'react';
import { Container, Row, Col, Input, Button, Card, CardBody} from 'mdbreact';
import Navbar1 from '../../components/Navbar1';
import img from "../../components/Imges/img10.jpg";

export default class Editprofile extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            mobileNo:"",
            address:"",
            password: "",
            errors: {}


        }
        this.handleFName = this.handleFName.bind(this);
        this.handleLName = this.handleLName.bind(this);
        this.handleMobile = this.handleMobile.bind(this);
        this.handleAddress = this.handleAddress.bind(this);
        this.handlePassword = this.handlePassword.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFName(e) {
        this.setState({
            firstName: e.target.value
        })
    }
    handleLName(e) {
        this.setState({
            lastName: e.target.value
        })
    }
    handleMobile(e) {
        this.setState({
            mobileNo: e.target.value
        })
    }
    handleAddress(e) {
        this.setState({
            address: e.target.value
        })
    }

    handlePassword(e) {
        this.setState({
            password: e.target.value
        })
    }


    handleSubmit(e) {
        e.preventDefault();
        const user = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            mobileNo: this.state.mobileNo,
            address: this.state.address,
            password: this.state.password,
        }
        console.log(user);

        const token= localStorage.getItem('token');
        fetch('https://git.heroku.com/shielded-mountain-60408.git/admin/profile',{
            method:"PUT",
            headers: {
              "Content-Type": "application/json",
              "authorization": "bearer "+ token
            },
            body:JSON.stringify(user)

          })

        .then(response => response.json())
          .then(()=>{
            window.alert("Profile updated!")
            this.props.history.push('/Yourprofile')
          })
           .catch(function(error) {
            console.log(error);
            window.alert("Cant update");
        });

        console.log(user);
    }

     //company dropdown list
    componentDidMount(){
        const token= localStorage.getItem('token');
        fetch('https://git.heroku.com/shielded-mountain-60408.git/admin/profile'  ,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "authorization": "bearer "+ token
              }

          })
          .then(response => {
            return response.json();
          })
          .then((data)=> {
            console.log(data);
            this.setState({
                firstName:data.result.firstName,
                lastName: data.result.lastName,
                mobileNo: data.result.mobileNo,
                address: data.result.address,
                password: data.result.password,
            });
            //console.log(this.state.empName)
          })

   }
    render()

    {

        const {errors} = this.state;

        return (
            <div  style={{ backgroundSize:"100%",backgroundRepeat:"no-repeat", backgroundPosition:"fixed"}}>
              <Navbar1/>
            <Container>

            <Row>

            {/* <Col md="4">
            <img src="..." className="float-left" alt="..." />
            </Col> */}
          <Col md="8">
          <Card  style={{marginTop:"100px" ,width:"600px" , marginLeft:"150px",backgroundColor:"rgba(186,229,240,0.8)"}}>
                <CardBody>
                <form onSubmit={ this.handleSubmit }>
            <p className="h5 text-center mb-4"> Edit Profile</p>
                <div className="form-group">
                    <Input
                    label="First Name"// icon="user"
                    validate error="wrong" success="right"
                    type="text"
                    className="form-control"
                    name="name"
                    onChange={ (e) => this.handleFName(e) }
                    value={ this.state.firstName }
                    />
                </div>
                <div className="form-group">
                    <Input
                    label="Last Name"// icon="user"
                    validate error="wrong" success="right"
                    type="text"
                    className="form-control"
                    name="name"
                    onChange={ (e) => this.handleLName(e) }
                    value={ this.state.lastName }
                    />
                </div>
                <div className="form-group">
                    <Input
                    label="Mobile No" //icon="phone"
                    validate error="wrong" success="right"
                    type="text"
                    className="form-control"
                    name="name"
                    onChange={ (e) => this.handleMobile(e) }
                    value={ this.state.mobileNo }
                    />
                </div>
                <div className="form-group">
                    <Input
                    label="Address" //icon="envelope"
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
                    type="password"
                    label="Password"// icon="lock"
                    validate
                    className="form-control"
                    name="password"
                    onChange={ (e) => this.handlePassword(e) }
                    value={ this.state.password }
                    />
                </div>

                <div className="text-center" style={{color:'white', width: '200px', marginLeft:"90px"}}>
                    <Button type="submit" onClick={this.handleSubmit.bind(this)} >submit</Button>
                </div>
            </form>
           </CardBody>
           </Card>
          </Col>
        </Row>
        {/* <Footerpage/> */}

        </Container>
        </div>



        );
    }
}
