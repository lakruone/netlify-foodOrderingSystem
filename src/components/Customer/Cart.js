import React,{Component} from 'react';
import { Row, Col, Input, Button, Card, CardBody } from 'mdbreact';
import Navbar2 from '../../components/Navbar2';
import img from "../../components/Imges/img10.jpg";

class NewProject extends Component{

    constructor() {
        super();
        this.state = {

            cart:[]
        }


        // this.handleSubmit = this.handleSubmit.bind(this);
    }


    componentDidMount(){
        const token= localStorage.getItem('token');
        fetch('http://localhost:5000/user/viewCart'  ,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "authorization": "bearer "+ token
              }

          })
          .then(response => {
            //console.log(response);
            return response.json();
          })
          .then((data)=> {
            console.log(data);
            this.setState({

                cart: data.result
            });
            //console.log(this.state.empName)
          })


     }


    render(){

        const handleReject=(cartID)=>{


            const data={
                cartID:cartID,

            }
                    const token= localStorage.getItem('token');
                    fetch('http://localhost:5000/user/deleteCart' ,{
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
                          window.alert('Item deleted from cart succesfully...!')
                          window.location.reload();
                      //  }

                      })


            }


        return(
<div  style={{  backgroundSize:"100%",backgroundRepeat:"no-repeat",marginTop:"100px", backgroundPosition:"fixed"}}>

            <div className="container" style={{ marginTop: '50px', width: '1000px'}}>
                <Navbar2 />
                <h2 style={{marginLeft: '175px', color: 'black'}}><b>Items</b></h2>
                <br/>

                <Row>
                    <Col md="6">



                   <CardBody>
                        <form onSubmit={ this.handleSubmit }>
                            <div className="form-group" style={{fontSize: '18px'}}>


                            {this.state.cart.map(function(item, key) {

                                return(

                                    <Card key = { key } style={{width: '600px',backgroundColor: '#80D71E', marginBottom:"50px" }}>
                                     <CardBody style={{width: '500px',backgroundColor: 'white', textAlign: 'center', marginBottom:"20px", marginLeft:"50px" }} >

                                    <div>
                                          <img src={item.imgDetail || "https://via.placeholder.com/100"} alt="Uploaded Images" height="300" width="400"/>
                                        Product Name : <label >{item.productName}</label><br/>
                                        Amount : <label>{item.amount}</label><br/>
                                        Total Price : <label>{item.totalPrice}</label><br/>
                                        Date added : <label>{item.dateAdded}</label>
                                    </div>


                                 </CardBody>
                                       <Button type="submit"   onClick={()=>handleReject(item.cartID)}>Remove Item </Button>
                            <Button href={"/payment/"+item.cartID} style={ { marginLeft:"200px", width:"200px" , marginBottom:"20px", textAlign: 'center'} } >Pay</Button>

                           </Card>
                                )
                            })}



                            </div>

                                    </form>
                        </CardBody>

                    </Col>


                </Row>
            </div>
</div>
        )
    }
}

export default NewProject;
