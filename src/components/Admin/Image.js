import React, {Component} from 'react';
import {storage} from '../firebase';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask,
MDBRow, MDBCol, MDBBtn, MDBView, MDBContainer, MDBFormInline } from "mdbreact";
import { Row, Col, Input, Button, Card, CardBody } from 'mdbreact';
import Navbar1 from '../../components/Navbar1';
import AuthService from '../../Auth/AuthService';
import img from "../../components/Imges/img10.jpg";

class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image:'',
      url:''
     }
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

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


          const data={
              imgDetail:url
          }

          const token= localStorage.getItem('token');
          fetch('https://shielded-mountain-60408.herokuapp.com/admin/changeImage/'  + this.props.match.params.id ,{
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
                  "authorization": "bearer "+ token
                },
                body:JSON.stringify(data)

            })
            .then(response => {
              // if(response===206){
                console.log("ok");
                console.log(response.json());
                window.alert('Image Uploaded succesfully...!')
               //window.location.reload();
            //  }

            })



        })
      });
  }




  render() {
     const style = {
       height:'100vh',
       display:'flex',
       flexDirection:'column',
       alignItems:'center',
       justifyContent:'center'
     };

    return (

      <div  style={{ backgroundImage:"url(" + img + ")", backgroundSize:"100%",backgroundRepeat:"no-repeat",marginTop:"100px", backgroundPosition:"fixed"}}>

      <div className="container" style={{ marginTop: '50px', width: '1000px'}}>
          <Navbar1 />
           <br/>

          <Row>



      <div style={style}>
      <input type ="file" onChange={this.handleChange}/>
      <button onClick = {this.handleUpload}> Upload </button>
      <br/>

      <MDBCol md="6" xl="5" className="mt-xl-5">
        <img src={this.state.url || "https://via.placeholder.com/300"} alt="Uploaded Images" height="300" width="400"/>
      </MDBCol>


      </div>


      </Row>
  </div>
</div>

    )
  }
}

export default Image;
