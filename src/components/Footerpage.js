import React from "react";
import { Col, ModalFooter, Container, Row, Footer, Fa,CardText } from "mdbreact";
//import { Link } from 'react-router-dom';

class Footerpage extends React.Component {
render() {
return (
<Footer color="blue-grey darken-4" className="font-small pt-2 mt-4" >
  <Container fluid className="text-center text-md-left" >
    <Row>
      <Col md="4" style={{marginLeft:"50px", marginTop:"25px"}}>
      <h5 className="title" id="aboutus">About Us</h5>
      <p>
        Here you can use rows and columns here to organize your footer
        content.
      </p>
      </Col>

      <Col md="4" style={{marginLeft:"-50px",marginTop:"25px"}}>
      <ul>
      <h5 className="title" id="aboutus">Contact Us</h5>

        <li className="list-unstyled">
        <CardText>
          Tele Number    :    +94 112 155 266
        </CardText>
        </li>
<br/>
        <li className="list-unstyled">
        <CardText>
          Address         :     No   :   50,Dematagoda
        </CardText>
        </li>
<br/>
        <li className="list-unstyled">
        <CardText>
          Email           :   creative123sparks@gmail.com
        </CardText>
        </li>
      </ul>
      </Col>

      <Col md="4">
      <div className="row my-3 d-flex justify-content-center" style={{ width: '-200px', marginRight:"300px"}}>
      <ul>
      <h5 className="title" id="aboutus">Follow Us</h5>
        <li className="list-unstyled">
        <a href="#"  className="fa-2x p-1 m-2 fb-ic"><Fa icon="facebook" className="white-text" /></a>
        </li>
        <li className="list-unstyled">
        <a href="#"  className="fa-2x p-1 m-2 tw-ic"><Fa icon="twitter" className="white-text " /></a>
        </li>
        {/* <li className="list-unstyled">
        <a href="#"  className="fa-2x p-1 m-2 gplus-ic"><Fa icon="google-plus" className="white-text" /></a>
        </li> */}
        
      </ul>
      </div>
      </Col>                       
    </Row>

  <ModalFooter className="mx-3 pt-1 mb-1" style={{ height: '50px'}}>
  {/* <Container >
    <div className="row my-3 d-flex justify-content-center" style={{ width: '800px'}}>
      <a href="#"  className="fa-3x p-2 m-3 fb-ic"><Fa icon="facebook" className="white-text text-center" /></a>
      <a href="#"  className="fa-3x p-2 m-3 tw-ic"><Fa icon="twitter" className="white-text text-center" /></a>
      <a href="#"  className="fa-3x p-2 m-3 gplus-ic"><Fa icon="google-plus" className="white-text text-center" /></a>
    </div>
  </Container> */}
    </ModalFooter>

  </Container>
  
</Footer>
);
}
}

export default Footerpage;