import React from 'react'
import '../App.css'
import { Container ,Row, Col } from 'react-bootstrap';
export default function Banner() {
  return (
    <>
    <section className='banner' id = 'home'>
      <Container>
        <Row className="align-items-center">
          <Col xs = {12} >
          <h1 className="display-4">Welcome to my Portfolio</h1>
          </Col>
        </Row>

      </Container>
    </section>
    </>
  );
}

