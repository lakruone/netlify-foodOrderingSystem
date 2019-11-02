import React, { Component } from 'react';
import { Container} from 'mdbreact';
import {  Row, Col, Card, CardBody, Mask, Icon, View, Btn, Button } from "mdbreact";

import Navbar2 from '../../components/Navbar2';
//import img1 from "../../components/Imges/img12.jpg";
//import img from "../../components/Imges/img17.jpg";

export default class CustomerHome extends Component {
    constructor() {
        super();
        this.state = {

            data:[]
        }


        // this.handleSubmit = this.handleSubmit.bind(this);
    }


    componentDidMount(){
        const token= localStorage.getItem('token');
        fetch('http://localhost:5000/admin/catagory'  ,{
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

                data: data.result
            });
            console.log()
          })


     }

    render() {
        return (
            <div >

            <Navbar2/>
            <Row>


            <Col md="12" style={{marginTop:"-50px"}}>

            <Container style={{ height:"600px", marginLeft:"100px", marginTop:"-50px", backgroundSize:"100%",backgroundRepeat:"no-repeat", backgroundPosition:"fixed",width:"1000px"}}>

            <Card style={{width:"600px", marginTop:"100px", marginLeft:"250px"}}>
                <CardBody>
                <div className="form-group" style={{fontSize: '18px'}}>
                <h4>Categories</h4>

                    {this.state.data.map(function(item, key) {

                        return(

                            <Card key = { key } style={{width: '500px',backgroundColor: '#80D71E', marginBottom:"50px" }}>
                          




                          <Button href={"/CustomerPro/"+item.catagoryID}  >{item.catagoryName}</Button>

                       </Card>
                        )
                    })}
                </div>
                </CardBody>
            </Card>


        </Container>
        </Col>
        </Row>
    </div>


        );
    }
}
