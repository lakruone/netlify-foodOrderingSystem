import React,{Component} from 'react';
import { Row, Col, Input, Button, Card, CardBody } from 'mdbreact';
import Navbar1 from '../../components/Navbar1';
import AuthService from '../../Auth/AuthService';
import img from "../../components/Imges/img10.jpg";

class NewProject extends Component{

    constructor() {
        super();
        this.state = {

            product:[]
        }


        // this.handleSubmit = this.handleSubmit.bind(this);
    }


    componentDidMount(){
        const token= localStorage.getItem('token');
        fetch('https://git.heroku.com/shielded-mountain-60408.git/admin/products/' + this.props.match.params.id  ,{
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
            console.log(data.result);
            this.setState({

                product: data.result
            });
            console.log(data.result)
          })


     }


    render(){

        const handleReject=(proID)=>{


            const data={
                productID:proID,


            }
                    const token= localStorage.getItem('token');
                    fetch('https://git.heroku.com/shielded-mountain-60408.git/admin/deleteProduct',{
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
                          window.alert('product deleted succesfully...!')
                          window.location.reload();
                      //  }

                      })


            }


        return(

            <div  style={{ backgroundImage:"url(" + img + ")", backgroundSize:"100%",backgroundRepeat:"no-repeat",marginTop:"100px", backgroundPosition:"fixed"}}>

            <div className="container" style={{ marginTop: '50px', width: '1000px'}}>
                <Navbar1 />
                 <br/>

                <Row>
                    <Col md="6">

                    <div>
                        <a href={"/addProduct/"+this.props.match.params.id} ><Button>Add new Product</Button></a>
                    </div>

                   <CardBody>
                        <form onSubmit={ this.handleSubmit }>
                        <h2 style={{color:"white"}} className="h5 text-center mb-4"><b>{this.state.productName}</b></h2>
                            <div className="form-group" style={{fontSize: '18px'}}>


                            {this.state.product.map(function(item, key) {

                                return(

                                    <Card key = { key } style={{width: '600px',backgroundColor: '#80D71E', marginBottom:"50px" }}>
                                   <CardBody style={{width: '500px',backgroundColor: 'white', textAlign: 'center', marginBottom:"20px", marginLeft:"50px" }} >



                                    <div>

                                        <Button href={"/ChangeImage/"+item.productID}  >Change Image</Button><br/>
                                        <img src={item.imgDetail || "https://via.placeholder.com/300"} alt="Uploaded Images" height="300" width="400"/>
                                        Product Name : <label >{item.productName}</label><br/>
                                        Quentity Available : <label>{item.qtyAvailable}</label><br/>
                                        Purchased Amount : <label>{item.purchaseAmount}</label><br/>
                                        Price : <label>{item.price}</label><br/>
                                        Description : <label>{item.description}</label>
                                    </div>


                                 </CardBody>

                                 <Button href={"/editProduct/"+item.productID}  >Edit</Button>
                            <Button type="submit"  onClick={()=>handleReject(item.productID)}   >Remove </Button>
                            <Button href={"/cusfeedback/"+item.productID} >Customer Feedbacks</Button>

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
