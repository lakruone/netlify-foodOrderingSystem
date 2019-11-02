import React,{Component} from 'react';
import { Row, Col, Input, Button, Card, CardBody } from 'mdbreact';
import Navbar2 from '../../components/Navbar2';
import img from "../../components/Imges/img10.jpg";

class CustomerPro extends Component{

    constructor() {
        super();
        this.state = {

            product:[],
            amount:'',
            data:null
        }

        this.handleAmount = this.handleAmount.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleAmount(e) {
        this.setState({
            amount: e.target.value
        })
    }



//display product details
    componentDidMount(){
        const token= localStorage.getItem('token');
        fetch('http://localhost:5000/user/products/' + this.props.match.params.id ,{
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

                product: data.result
            });
            //console.log(this.state.empName)
          })


     }

//display category name
    //  componentDidMount(){
    //     const token= localStorage.getItem('token');
    //     fetch('http://localhost:5000/admin/catagory'  ,{
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "authorization": "bearer "+ token
    //           }

    //       })
    //       .then(response => {
    //         return response.json();
    //       })
    //       .then((data)=> {
    //         console.log(data);
    //         this.setState({

    //             catagoryName: data.result.catagoryName
    //         });
    //         console.log(this.state.catagoryName)
    //       })


    //  }

    render(){






        return(
<div  style={{ backgroundImage:"url(" + img + ")", backgroundSize:"100%",backgroundRepeat:"no-repeat",marginTop:"100px", backgroundPosition:"fixed"}}>

            <div className="container" style={{ marginTop: '50px', width: '1000px'}}>
                <Navbar2 />
                <h2 style={{marginLeft: '175px', color: 'white'}}><b>{this.state.catagoryName }</b></h2>
                <br/>

                <Row>
                    <Col md="6">



                   <CardBody>
                        <form onSubmit={ this.handleSubmit }>
                           <div className="form-group" style={{fontSize: '18px'}}>


                            {this.state.product.map(function(item, key) {

                                return(

                                    <Card key = { key } style={{width: '600px',backgroundColor: '#80D71E', marginBottom:"50px" }}>
                                    <h5 style={ {marginTop:"20px", textAlign: 'center'} }><b>{item.projectName}</b></h5>
                                    <CardBody style={{width: '500px',backgroundColor: 'white', textAlign: 'center', marginBottom:"20px", marginLeft:"50px" }} >

                                    <div>
                                        <img src={item.imgDetail || "https://via.placeholder.com/100"} alt="Uploaded Images" height="300" width="400"/>
                                        Product Name : <label >{item.productName}</label><br/>
                                        Price : <label>{item.price}</label><br/>
                                        Description : <label>{item.description}</label>
                                    </div>





                                 </CardBody>



                               <Button href={"/addCart/"+item.productName}style={ { marginLeft:"200px", width:"200px" , marginBottom:"20px", textAlign: 'center'} } >Add to Cart</Button>

                            <Button href={"/feedback/"+item.productID} style={ { marginLeft:"200px", width:"200px" , marginBottom:"20px", textAlign: 'center'} } > Feedback</Button>

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

export default CustomerPro;
