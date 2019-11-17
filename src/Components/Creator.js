import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import team8 from '../Images/team8.jpg'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Creator() {
    return (
        <div className="creator">
            <h1 className="text-center">Developers</h1><br/><br/>
            <Row>
                <Col>
                 <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={team8} />
                <Card.Body>
                <div class="card-body">
                    <ul class="ficons text-center">
                        <li><i class="fa fa-facebook fa-2x" aria-hidden="true"></i></li>
                         <li><i class="fa fa-instagram fa-2x" aria-hidden="true"></i></li>
                        <li><i class="fa fa-linkedin fa-2x" aria-hidden="true"></i></li>
                        <li><i class="fa fa-github fa-2x" aria-hidden="true"></i></li>
                    </ul>
                    <h4 class="card-title text-center">AmarDon</h4>
                    <p class="card-text text-center">Frontend Developer</p>
                 </div>
                </Card.Body>
                </Card>
                </Col>

                <Col>
                 <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={team8} />
                <Card.Body>
                <div class="card-body">
                    <ul class="ficons text-center">
                        <li><i class="fa fa-facebook fa-2x" aria-hidden="true"></i></li>
                         <li><i class="fa fa-instagram fa-2x" aria-hidden="true"></i></li>
                        <li><i class="fa fa-linkedin fa-2x" aria-hidden="true"></i></li>
                        <li><i class="fa fa-github fa-2x" aria-hidden="true"></i></li>
                    </ul>
                    <h4 class="card-title text-center">Jxbfs</h4>
                    <p class="card-text text-center">Backend Developer</p>
                 </div>
                </Card.Body>
                </Card>
                </Col>

                <Col>
                 <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={team8} />
                <Card.Body>
                <div class="card-body">
                    <ul class="ficons text-center">
                        <li><i class="fa fa-facebook fa-2x" aria-hidden="true"></i></li>
                         <li><i class="fa fa-instagram fa-2x" aria-hidden="true"></i></li>
                        <li><i class="fa fa-linkedin fa-2x" aria-hidden="true"></i></li>
                        <li><i class="fa fa-github fa-2x" aria-hidden="true"></i></li>
                    </ul>
                    <h4 class="card-title text-center">Smokeshow</h4>
                    <p class="card-text text-center">Backend Developer</p>
                 </div>
                </Card.Body>
                </Card>
                </Col>

                <Col>
                 <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={team8} />
                <Card.Body>
                <div class="card-body">
                    <ul class="ficons text-center">
                        <li><i class="fa fa-facebook fa-2x" aria-hidden="true"></i></li>
                         <li><i class="fa fa-instagram fa-2x" aria-hidden="true"></i></li>
                        <li><i class="fa fa-linkedin fa-2x" aria-hidden="true"></i></li>
                        <li><i class="fa fa-github fa-2x" aria-hidden="true"></i></li>
                    </ul>
                    <h4 class="card-title text-center">The Guy</h4>
                    <p class="card-text text-center">Frontend Developer</p>
                 </div>
                </Card.Body>
                </Card>
                </Col>
            </Row>

            
        </div>
    )
}

export default Creator
