import React,{Component} from 'react';
import { Row, Col, Input, Button, Card, CardBody } from 'mdbreact';
import Navbar2 from '../../components/Navbar2';

import jwt_decode from 'jwt-decode';

//import Footerpage from './Footerpage';

//import './Signup.css';
class Payment extends Component{

    constructor() {
        super();
        this.state = {


            feedback: '',
            errors: {}
        }
        this.handleFeedback = this.handleFeedback.bind(this);


        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleFeedback(e) {
        this.setState({
            feedback: e.target.value
        })
    }


    //e-event
    handleSubmit(e) {
        e.preventDefault();
        const user = {

          
            comment: this.state.feedback,

        }
        console.log(user);
        const token= localStorage.getItem('token');
        fetch('http://localhost:5000/user/feedback/'  + this.props.match.params.id ,{
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
               window.alert('feedback submitted Successsfuly...!')
                 window.location.reload();
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
          <Col md="10">
           <Card>
               <CardBody>
            <form onSubmit={ this.handleSubmit }>
            <p className="h5 text-center mb-4">Feedback</p>



                <div className="form-group">
                    <Input
                    type="text"
                    label="Comment" //icon="lock"
                    validate
                    className="form-control"
                    name="text"
                    onChange={ (e) => this.handleFeedback(e) }
                    value={ this.state.feedback }
                    />
                </div>


                <div className="text-center" style={{color:'white'}}>
                    <Button type="submit"  onClick={this.handleSubmit.bind(this)}>Submit</Button>
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
