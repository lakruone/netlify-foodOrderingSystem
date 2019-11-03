import React, { Component } from 'react';
import { Container, Row, Col, Input, Button,Card, CardBody,Image} from 'mdbreact';
import Navbar1 from '../../components/Navbar1';
import AuthService from '../../Auth/AuthService';

//import src from './img5.jpg'
//import img from "../../components/Imges/img8.jpg";
import img from "../../components/Imges/img10.jpg";


export default class Yourprofile extends Component {
    constructor() {
        super();
        this.state = {
           data:[],
            errors: {}

        }

    }


     //company dropdown list
    componentDidMount(){
        const token= localStorage.getItem('token');
        fetch('https://shielded-mountain-60408.herokuapp.com//admin/profile' ,{
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
                email: data.result.email,

            });
           // console.log(this.state.fname)
          })

   }
    render()

    {
      //  drop down list mapped
       // console.log(this.state.userNames)
        const {errors} = this.state;

    // let empName = this.state.empName;
    // let pItems = empName.map((item) =>
    //         <p key={item.empName}>{item.empName}</p>
    // );

    //  let employee_comp_name = this.state.employee_comp_name;
    //  let pItems1 = employee_comp_name.map((item) =>
    //         <p key={item.employee_comp_name}>{item.employee_comp_name}</p>
    //  );

       // var { isLoaded, items } = this.state;    ,
        return (

            <div  style={{  backgroundSize:"100%",backgroundRepeat:"no-repeat", backgroundPosition:"fixed", marginLeft:"-100px"}}>
            <div style={{ marginRight:"100px", marginLeft:"-200px",padding:"50px",marginTop:"200px"}}>

            <Navbar1/>
            <Container >

            <Row>

            <Col >
            <p className="h5 text-left mb-4 blue-text"  style={{ marginTop:"-100px",marginLeft:"150px"}}>My Profile</p>
            </Col>
          <Col >
            <form onSubmit={ this.handleSubmit } class="form-horizontal">


            <Card style={{marginTop:"-200px" ,width:"600px" , marginLeft:"350px",backgroundColor:"rgba(186,229,240,0.8)"}}>

                <CardBody>


                {/* <div class="form-group row">
                    <label for="staticEmail" class="col-sm-3 col-form-label grey-text">User Name</label>
                    <div class="col-sm-9">
                    <input type="text" readonly class="form-control-plaintext" id="staticEmail" value={ this.state.userName }/>
                    </div>
                </div> */}



                 <div className="form-group row">
                    <label for="staticEmail" class="col-sm-3 col-form-label grey-text">First Name</label>
                    <div className="col-sm-9">
                    <input type="text"  class="form-control-plaintext"  value={ this.state.firstName }/>
                    </div>
                </div>

                <div className="form-group row">
                    <label for="staticEmail" class="col-sm-3 col-form-label grey-text">Last Name</label>
                    <div className="col-sm-9">
                    <input type="text" class="form-control-plaintext" value={ this.state.lastName }/>
                    </div>
                </div>

                <div className="form-group row">
                    <label for="staticEmail" class="col-sm-3 col-form-label grey-text">Address</label>
                    <div className="col-sm-9">
                    <input type="text"  class="form-control-plaintext"  value={ this.state.address }/>
                    </div>
                </div>

                <div class="form-group row">
                    <label for="staticEmail" class="col-sm-3 col-form-label grey-text">Mobile No.</label>
                    <div class="col-sm-9">
                    <input type="text"  class="form-control-plaintext"  value={ this.state.mobileNo }/>
                    </div>
                </div>

                <div class="form-group row">
                    <label for="staticEmail" class="col-sm-3 col-form-label grey-text">Email Address</label>
                    <div class="col-sm-9">
                    <input type="text"  class="form-control-plaintext" value={ this.state.email }/>
                    </div>
                </div>



                </CardBody>
                </Card>
            </form>

          </Col>
        </Row>
        {/* <Footerpage/> */}

        </Container>

    </div>
    </div>


        );
    }
}
