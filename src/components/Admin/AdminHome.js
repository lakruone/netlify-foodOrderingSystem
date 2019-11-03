import React, { Component } from 'react';
import { Container} from 'mdbreact';
import {  Row, Col, Card, CardBody, Mask, Icon, View, Btn, Button,Input } from "mdbreact";
import jwt_decode from 'jwt-decode';
import Navbar1 from '../../components/Navbar1';
//import img1 from "../../components/Imges/img12.jpg";
//import img from "../../components/Imges/img17.jpg";
const token= localStorage.getItem('token');


export default class AdminHome extends Component {
    constructor() {
        super();
        this.state = {
            categoryName: "",
            data:[],

            errors: {}
        }

        this.handleCategoryName = this.handleCategoryName.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleCategoryName(e) {
        this.setState({
            categoryName: e.target.value
        })
    }
    handleLName(e) {
        this.setState({
            lname: e.target.value
        })
    }


    //e-event
    handleSubmit(e) {
        e.preventDefault();

        const user = {
            catagoryName: this.state.categoryName,

        }
        console.log(user);
        //company register - backend admin.js
        fetch('https://shielded-mountain-60408.herokuapp.com/admin/addCatagory', {
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

                    window.alert('Catagory added successfully..!')
                    //this.props.history.push('/login');
                    window.location.reload();

                 }
                else if (response.status === 400)
                {
                    console.log("damn");
                    window.alert("Category already in the list");
                }
          })

          .catch(function() {
            console.log('error handling');
            window.alert("something is going wrong..!!")
        });
         console.log(this.state.catagoryName)
    }

    componentDidMount(){
        const token= localStorage.getItem('token');
        fetch('https://shielded-mountain-60408.herokuapp.com/admin/catagory'  ,{
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
        const decode = jwt_decode(localStorage.token);
        return (
            <div >

            <Navbar1/>
            <Row>

            <Col md="12" style={{marginTop:"50px"}}>

            <Container style={{ height:"1000px", marginLeft:"100px", marginTop:"-50px", backgroundSize:"100%",backgroundRepeat:"no-repeat", backgroundPosition:"fixed",width:"1000px"}}>


        <section className="my-2"  >
          <h2 className="h1-responsive font-weight-bold text-center my-5 lime-text" style={{fontFamily:"cursive", marginTop:"100px"}}>Add new Category</h2>
          <p className="lead white-text w-responsive text-center mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </section>
        <Card style={{width:"400px", marginTop:"-100px", marginLeft:"250px"}}>
        <CardBody>
        <form onSubmit={ this.handleSubmit }>

                <div className="form-group">
                    <Input
                    label="Add New Catagory" //icon="user"
                    validate error="wrong" success="right"
                    type="text"
                    className="form-control"
                    name="name"
                    onChange={ (e) => this.handleCategoryName(e) }
                    value={ this.state.categoryName }
                    />
                </div>

                <div className="text-center" style={{color:'white', width: '200px', marginLeft:"90px"}}>
                    <Button type="submit" onClick={this.handleSubmit.bind(this)}>submit</Button>
                </div>
            </form>
            </CardBody>
            </Card>

            <Card style={{width:"600px", marginTop:"10px", marginLeft:"250px"}}>
                <CardBody>
                <div className="form-group" style={{fontSize: '18px'}}>
                <h4>Categories</h4>

                    {this.state.data.map(function(item, key) {

                        return(

                            <Card key = { key } style={{width: '500px',backgroundColor: '#80D71E', marginBottom:"50px" }}>




                            <a href={"/dairyProduct/" +item.catagoryID}><Button>{item.catagoryName}</Button></a>


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
