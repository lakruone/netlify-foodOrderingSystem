import React, { Component } from 'react';
import { Container, Row, Col, Input, Button, Card, CardBody} from 'mdbreact';
import Navbar1 from '../../components/Navbar1';
import img from "../../components/Imges/img10.jpg";
const token= localStorage.getItem('token');

export default class Editprofile extends Component {
    constructor() {
        super();
        this.state = {
            productName: '',
            price: '',
            description: '',
            quantity:"",
            errors: {}

        }
        this.handleProductName = this.handleProductName.bind(this);
        this.handlePrice = this.handlePrice.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleQuantity = this.handleQuantity.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleProductName(e) {
        this.setState({
            productName: e.target.value
        })
    }

    handlePrice(e) {
        this.setState({
            price: e.target.value
        })
    }

    handleDescription(e) {
        this.setState({
            description: e.target.value
        })
    }

    handleQuantity(e) {
        this.setState({
            quantity: e.target.value
        })
    }


    handleSubmit(e) {
        e.preventDefault();
        const user = {
            productName: this.state.productName,
            price: this.state.price,
            description: this.state.description,
           // quantity: this.state.quantity,
        }
        console.log(user);

        fetch('http://localhost:5000/admin/editProduct/'+ this.props.match.params.id,{
            method:"PUT",
            headers: {
              "Content-Type": "application/json",
              "authorization": "bearer "+ token
            },
            body:JSON.stringify(user)

          })

        .then(response => response.json())
          .then(()=>{
            window.alert("product updated successfully")
            this.props.history.push('/adminhome')

          })
           .catch(function(error) {
            console.log(error);
            window.alert("error")

        });

        console.log(user);
    }


    componentDidMount(){
        fetch('http://localhost:5000/admin/editProduct/' + this.props.match.params.id ,{
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
                productName:data.result.productName,
                price:data.result.price,
                description:data.result.description,
              //  addQty:data.result.quantity,

            });
            //console.log(this.state.empName)
          })

   }
    render()

    {

        const {errors} = this.state;

        return (
            <div  style={{ backgroundImage:"url(" + img + ")", backgroundSize:"100%",backgroundRepeat:"no-repeat", backgroundPosition:"fixed"}}>
              <Navbar1/>
            <Container>

            <Row>

            {/* <Col md="4">
            <img src="..." className="float-left" alt="..." />
            </Col> */}
          <Col md="8">
          <Card  style={{marginTop:"100px" ,width:"600px" , marginLeft:"150px",backgroundColor:"rgba(186,229,240,0.8)"}}>
                <CardBody>
                <form  onSubmit={ this.handleSubmit }>
            <p className="h5 text-center mb-4">Edit Product</p>

                <div className="form-group" >
                    <Input
                    style={{color:"black"}}
                    label="Product Name" //icon="user"
                    validate error="wrong" success="right"
                    type="text"
                    className="blue-grey-text"
                    onChange={ (e) => this.handleProductName(e) }
                    value={ this.state.productName }
                    />
                </div>

                 {/* <div className="form-group">
                    <Input
                    label="Quentity Available" //icon="envelope"
                    validate error="wrong" success="right"
                    type="number"
                    className="form-control"
                    onChange={ (e) => this.handleQuantity(e) }
                    value={ this.state.quantity }
                    />
                </div> */}

                <div className="form-group">
                    <Input
                    label="Price" //icon="envelope"
                    validate error="wrong" success="right"
                    type="number"
                    className="form-control"
                    onChange={ (e) => this.handlePrice(e) }
                    value={ this.state.price }
                    />
                </div>

                <div className="form-group">
                    <Input
                    type="text"
                    label="Description" //icon="lock"
                    validate
                    className="form-control"
                    name="text"
                    onChange={ (e) => this.handleDescription(e) }
                    value={ this.state.description }
                    />
                </div>


                <div className="text-center" style={{color:'white'}}>
                    <Button type="submit" onClick={ this.handleSubmit.bind(this) }>Submit</Button>
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
