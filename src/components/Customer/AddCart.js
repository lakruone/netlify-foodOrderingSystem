import React,{Component} from 'react';
import { Row, Col, Input, Button, Card, CardBody } from 'mdbreact';
import Navbar2 from '../../components/Navbar2';
//import Footerpage from './Footerpage';

//import './Signup.css';
class AddProject extends Component{

    constructor() {
        super();
        this.state = {

            productName: '',
            price: '',
            amount: 1,
            date: '',
            image:'',
            errors: {}
        }
        this.handleDate = this.handleDate.bind(this);
        this.handleProductName = this.handleProductName.bind(this);
        this.handlePrice = this.handlePrice.bind(this);
        this.handleAmount = this.handleAmount.bind(this);
        this.handleImage = this.handleImage.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleDate(e) {
        this.setState({
            date: e.target.value
        })
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
    handleAmount(e) {
        this.setState({
            amount: e.target.value
        })
    }

    handleImage(e) {
        this.setState({
            image: e.target.value
        })
    }

    handleStatus(e) {
        this.setState({
            OTRate: e.target.value
        })
    }

    //e-event
    handleSubmit(e,a) {
        e.preventDefault();
        const user = {
            date: this.state.date,
            productName: this.state.productName,
            price: this.state.price,
            amount: this.state.amount,
            image: this.state.image,

        }
        console.log(user);

        const token= localStorage.getItem('token');
        fetch('http://localhost:5000/user/addCart/'+this.props.match.params.id,{
            method:"POST",
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
               window.alert('Item added Successsfuly...!')
               a.history.push('/cart')
           }
           else if(response.status === 400){
            console.log("damn");
            window.alert('Item already added to your cart..!')
            a.history.push('/cart')
          }           else if(response.status === 403){
                       console.log("damn");
                       window.alert('sorry..! Not Available in the store')
                       window.location.reload();
                      }


          })

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
            <p className="h5 text-center mb-4">Add  Cart</p>




                <div className="form-group">
                    <Input
                    label="Enter the Amount" //icon="envelope"
                    validate error="wrong" success="right"
                    type="number"
                    className="form-control"
                    name="amount"
                    onChange={ (e) => this.handleAmount(e) }
                    value={ this.state.amount }
                    />
                </div>


                <div className="text-center" style={{color:'white'}}>
                    <Button type="submit" onClick={(e)=> this.handleSubmit(e,this.props)}>Submit</Button>
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

export default AddProject;
