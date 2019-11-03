import React, { Component } from 'react';
import { Container, Row, Col, Input, Button,Card, CardBody,Image} from 'mdbreact';
import Navbar1 from '../../components/Navbar1';
import AuthService from '../../Auth/AuthService';

//import src from './img5.jpg'
//import img from "../../components/Imges/img8.jpg";
//import img from "../../components/Imges/img10.jpg";


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
        fetch('https://shielded-mountain-60408.herokuapp.com/admin/feedback/'  + this.props.match.params.id ,{
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
                data:data.result

            });
           // console.log(this.state.fname)
          })

   }
    render()

    {

        return (


            <div style={{ marginRight:"100px", marginLeft:"-200px",padding:"50px",marginTop:"200px"}}>

            <Navbar1/>
            <Container >

            <Row>

            <Col >
            <p className="h5 text-left mb-4 blue-text"  style={{ marginTop:"-200px",marginLeft:"150px"}}>Customer Feedback</p>
           </Col>
          <Col >
            <form onSubmit={ this.handleSubmit } class="form-horizontal">


            <Card style={{marginTop:"-200px" ,width:"600px" , marginLeft:"350px",backgroundColor:"rgba(186,229,240,0.8)"}}>

                <CardBody>




                {this.state.data.map(function(item, key) {

                    return(

                        <Card key = { key } style={{width: '500px',backgroundColor: '#80D71E', marginBottom:"50px" }}>



                        Customer Name : <label >{item.customerName}</label><br/>
                        Comment : <label>{item.comment}</label><br/>



                   </Card>
                    )
                })}

                </CardBody>
                </Card>
            </form>

          </Col>
        </Row>
        {/* <Footerpage/> */}

        </Container>

    </div>



        );
    }
}
