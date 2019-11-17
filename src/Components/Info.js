import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'font-awesome/css/font-awesome.min.css';
// import './Mystyle.css'
function Info() {
    return (
        <div>
            <Container>
            <h1 className="text-center">Features</h1><br/>
  <Row>
    <Col className="col-md-4 text-center">
     <i className="fa fa-comments-o fa-3x" size="lg"></i><br /><br /> 
      <h2 className="text-center">Customer Satisfaction</h2>
      Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem 
    ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
      
     </Col>


    <Col className="col-md-4 text-center">
    
    <i className="fa fa-calendar fa-3x" size="lg"></i><br /><br />
    <h2 className="text-center">Ease Of Usage</h2>
    whats app event planner
    Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem 
    ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
    </Col>


    <Col className="col-md-4 text-center">
    <i className="fa fa-bar-chart fa-3x" size="lg"></i><br /><br />
    <h2 className="text-center">Market Research</h2>
    whats app market research
    Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem 
    ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
    </Col>
  </Row>
  <br />
  <br />
  <br />
  <br />
  <Row>
    <Col className="col-md-4 text-center">
    <i className="fa fa-cloud-upload fa-3x" size="lg"></i><br /><br />
    <h2 className="text-center">Cloud Backup</h2>
    whats app cloud backup
    Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem 
    ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
    </Col>

    <Col className="col-md-4 text-center">
    <i className="fa fa-book fa-3x" size="lg"></i><br /><br />
      <h2 className="text-center">Creadit Based Form Creation Management</h2>
    whats app Education
    Lorem ipsum orem ipsumLorem ipsumLorem ipsumLorem ipsumLorem 
    ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
    </Col>
    <Col className="col-md-4 text-center">
    <i className="fa fa-bolt fa-3x" size="lg"></i><br /><br />
    <h2 className="text-center">Secure Payment</h2>
    whats app fast payment
    Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem 
    ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum
    </Col>
  </Row>
</Container>
        </div>
    )
}

export default Info
