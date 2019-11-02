import React, { Component } from 'react';
import { Container, Row, Col,Fa,Button, View, Mask,Card, CardBody,CardImage,CardText,CardTitle} from 'mdbreact';
import NavBarMain from './Navbarmain';

import './Home.css';
import img1 from "../../src/components/Imges/img1.jpg";
import img4 from "../../src/components/Imges/img4.jpg";

export default class Home extends Component {
    render() {
      
        return (

            <div  style={{ backgroundImage:"url(" + img1 + ")", marginTop:"50px", backgroundSize:"100%",backgroundRepeat:"no-repeat", backgroundPosition:"fixed", marginBottom:"-120px"}} >
               <NavBarMain/>
            
            <div>
           
          
          {/* <Col md="6"><SideNavPage /> </Col> */}
        {/* <div className="bg"></div> */}
           
              
              
                <Container>

                  <section className="my-2" style={{ marginTop: '50px', width: '900px'}}>
                  <h2 className="h1-responsive font-weight-bold text-center my-5">Welcome To Food Court..!!!</h2><br/><br/>

                  <p className="lead black-text w-responsive text-center mx-auto mb-5">Manage your stocks and make your orders efficiently financial management. </p>
<br/><br/><br/>
                  <div className="text-center" style={{color:'white'}}>
                    <Button type="submit" className="btn-btn primary " href="/register"  >Register now.</Button>
                  </div>

                  <br/>
                  <br />

                 <br/><br/><br/><br/><br/><br/><br/><br/>

                  </section>
                </Container>
             
                <div  style={{ backgroundImage:"url(" + img4 + ")", marginTop:"100px",marginTop:"50px",backgroundRepeat:"no-repeat", backgroundAttachment:"fixed", backgroundSize:"100%", backgroundPosition:"fixed", marginBottom:"50px"}}>
        <Row>
          <div>
      <Col md="12" style={{ marginLeft:"400px", width: "700px" , marginTop:"100px"}}>
      
        <Card >
 
          <CardBody style={{backgroundColor:"gray"}}>
            {/* <CardTitle>Card title</CardTitle> */}
            <CardText style={{color:"white"}} >
              We manage Projects Finances.

            </CardText>
            
          </CardBody>
        </Card>
      </Col>
      </div>
      <br/> <br/> <br/><br/>
      <div >
      <Row md="12" style={{ marginLeft:"400px", width: "700px" , marginTop:"100px"}} >
      <Card >
     
          <CardBody size="12" style={{backgroundColor:"gray"}}>
            {/* <CardTitle>Card title</CardTitle> */}
            <CardText style={{color:"white"}} >
              We manage Employee Salary.

            </CardText>
            
          </CardBody>
        </Card>
       </Row>
       </div>
       <div>
      <Col md="12" style={{ marginLeft:"400px", width: "700px" , marginTop:"100px"}}>
      <Card >
      
          <CardBody style={{backgroundColor:"gray"}}>
            
            <CardText style={{color:"white"}} >
             We manage Employee Leaves

            </CardText>
            
          </CardBody>
        </Card>
      </Col>
      </div>
    </Row>
        </div>
        </div>
       
    </div>
    

        );
    }
}


