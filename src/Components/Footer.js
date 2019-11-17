import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Footer() {
    return (
        <div>
            <div class="foot">
                <div class="container"> 
                    <div class="row"> 
                        <div class="col-md-6 address">
                             <h1>FeedBuzz</h1>
                                <p>A simple and effective way to learn</p>
                                <div class="contact-info">
                    <h4>headquarter:</h4>
                    <p> faridabad (121005)<br />
                        haryana<br/>
                        india
                    </p>
                 </div>
                 <div class="phone-info">
                       <h4>contact us:</h4>
                        <p>9999397692<br/>
                          9319548488</p>
                </div>
                <ul class="list">
                    <li><i class="fa fa-facebook fa-2x" aria-hidden="true"></i></li>
                    <li><i class="fa fa-twitter fa-2x" aria-hidden="true"></i></li>
                    <li><i class="fa fa-instagram fa-2x" aria-hidden="true"></i></li>
                    <li><i class="fa fa-github fa-2x" aria-hidden="true"></i></li>
                </ul>
             </div>
            
             <div class="col-md-6 right">
                 <h1>Contact us</h1>
                 <Form>
                     <Form.Row>
                         <Col>
                             <Form.Control placeholder="First name" /><br/>
                         </Col>
                    </Form.Row>
                   
                    <Form.Row>
                         <Col>
                             <Form.Control placeholder="Last name" /><br/>
                          </Col>
                    </Form.Row>
                    <Form.Row>
                         <Col>
                             <Form.Control placeholder="Email" /><br/>
                          </Col>
                    </Form.Row>
                    <Form.Row>
                         <Col>
                             <Form.Control placeholder="Phone" /><br/>
                          </Col>
                    </Form.Row>
                    <Button variant="primary" type="submit"> Submit</Button>
                </Form>

                    
             </div>
             </div>
            </div>
             <hr />
             <div class="bottom">
                    <h5 class="text-center">copyright &copy; 2019 all right reserved by online examination portal</h5>
             </div>
             
                    
     </div>

        </div>
    )
}

export default Footer
