import React,{Component} from 'react';
import { Row, Col, Input, Button, Card, CardBody,  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask,
MDBRow, MDBCol, MDBBtn, MDBView, MDBContainer, MDBFormInline } from 'mdbreact';
import NavBarMain from '../../components/Navbar1';
//import img from "../../components/Imges/img5.jpg";
import {storage} from '../firebase';
import AuthService from '../../Auth/AuthService';

//import './Signup.css';
class AddProduct extends Component{

    constructor() {
        super();
        this.state = {

            productName: '',
            price: '',
            description: '',
            quantity:"",
            image:'',
            url:'',
            errors: {}
        }

        this.handleProductName = this.handleProductName.bind(this);
        this.handlePrice = this.handlePrice.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleQuantity = this.handleQuantity.bind(this);

        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);

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


//////////////////////////////////////////
handleChange = e =>{
  if(e.target.files[0]){
    const image=e.target.files[0];
    this.setState(()=> ({image}));
    //console.log(image);
  }
}

handleUpload = () => {
  const {image} = this.state;
  const uploadTask = storage.ref(`images/${image.name}`).put(image);
  uploadTask.on('state_changed',
    (snapshot) => {
      //progress function
    },
    (error)=>{
      //error function

    },
    ()=>{
      //complete function
      storage.ref('images').child(image.name).getDownloadURL().then(url=>{
        console.log(url);
        this.setState({url});
      })
    });
}

/////////////////////////////////////////////




    //e-event
    handleSubmit(e,a) {
        e.preventDefault();
        const user = {
            productName: this.state.productName,
            price: this.state.price,
            description: this.state.description,
            qtyAvailable: this.state.quantity,
            imgDetail:this.state.url

        }
        console.log(user);
        const token= localStorage.getItem('token');
        //console.log(token);
        //company register - backend admin.js
        fetch('http://localhost:5000/admin/addProduct/'  + this.props.match.params.id, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                 "authorization": "bearer "+ token

              },
            body: JSON.stringify(user)

          })
          .then(function(response) {
         //   console.log(this.state.productName)
            console.log(response)
            // return response.json();
            if (response.status ===200 ){
                console.log("ok");
                console.log(response.json());
                window.alert('Product added Successsfuly...!')
                a.history.push('/adminhome')
            }
            else if(response.status === 400){
             console.log("damn");
             window.alert('Product already exist')
            }

           })

       //  console.log(this.state.productName)

     }

    render(){

       //console.log(this.state.role)


        return(




        <div  style={{ backgroundSize:"100%",backgroundRepeat:"no-repeat", backgroundPosition:"fixed"}}>
            <div className="container" style={{ marginTop: '50px', width: '700px'}}>
              <NavBarMain/>








            <Row>
          <Col md="10">
          <CardBody className="example z-depth-5" style={{ borderRadius: '20px', marginTop: '-50px', width: '600px',backgroundColor:"rgba(238,242,246,0.7)", marginBottom:"100px", border:"1px solid blue"}}>

            <form  onSubmit={ this.handleSubmit }>
            <p className="h5 text-center mb-4">Add new Product</p>

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

                 <div className="form-group">
                    <Input
                    label="Quentity Available" //icon="envelope"
                    validate error="wrong" success="right"
                    type="number"
                    className="form-control"
                    onChange={ (e) => this.handleQuantity(e) }
                    value={ this.state.quantity }
                    />
                </div>

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
                    <Button type="submit" onClick={(e)=> this.handleSubmit(e,this.props) }>Submit</Button>
                </div>
            </form>
           </CardBody>
          </Col>
        </Row>
        {/* <Footerpage/> */}
        </div>
</div>
        );
    }
}

export default AddProduct;
