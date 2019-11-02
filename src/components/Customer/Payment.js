import React,{Component} from 'react';
import { Row, Col, Input, Button, Card, CardBody } from 'mdbreact';
import Navbar2 from '../../components/Navbar2';
//import Footerpage from './Footerpage';

//import './Signup.css';
class Payment extends Component{

    constructor() {
        super();
        this.state = {

            catrNo: '',
            date: '',

            errors: {}
        }
        this.handleDate = this.handleDate.bind(this);
        this.handleCartNo = this.handleCartNo.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleDate(e) {
        this.setState({
            date: e.target.value
        })
    }
    handleCartNo(e) {
        this.setState({
            catrNo: e.target.value
        })
    }

    //e-event
    handleSubmit(e,a) {
        e.preventDefault();
        const user = {
            expDate: this.state.date,
            cardNumber: this.state.catrNo,

        }
        console.log(user);
        //company register - backend admin.js
        const token= localStorage.getItem('token');
        fetch('http://localhost:5000/user/pay/'  + this.props.match.params.id ,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": "bearer "+ token
              },
              body:JSON.stringify(user)

          })
          .then(function(response) {
           // return response.json();
           if (response.status ===200 ){
               console.log("ok");
               console.log(response.json());
               window.alert('Payment succesfully...!')
               a.history.push('/cart')
           }

          })
          .catch(function() {
            console.log('error handling');
            window.alert("something is going wrong..!!")
        })
          .then(function(data) {
            console.log(data);
          });
    }


    render(){

        return(

            <div className="container" style={{ marginTop: '50px', width: '600px'}}>
              <Navbar2/>
            <Row>
          <Col md="12">
           <Card>
               <CardBody>
            <form onSubmit={ this.handleSubmit }>
            <p className="h5 text-center">Payment Information</p>

                <div className="form-group">
                    <Input
                    type="number"
                    label="Cart Number" //icon="lock"
                    validate
                    className="form-control"
                    name="text"
                    onChange={ (e) => this.handleCartNo(e) }
                    value={ this.state.catrNo }
                    />
                </div>

                <div className="form-group">
                    <Input
                    label="Expiry Date" //icon="user"
                    validate error="wrong" success="right"
                    type="date"
                    className="form-control"
                    name="name"
                    onChange={ (e) => this.handleDate(e) }
                    value={ this.state.date }
                    />
                </div>



                <div className="text-center" style={{color:'white', width: '200px', marginLeft:"90px"}}>
                    <Button type="submit" onClick={(e)=> this.handleSubmit(e,this.props)} >place order</Button>
                    <Button href="/cart" type="cancel" >cancel</Button>


                </div>
            </form>
            </CardBody>
           </Card>
          </Col>
        </Row>
        {/* <Footerpage/> */}
        </div>

        );
    }
}

export default Payment;
