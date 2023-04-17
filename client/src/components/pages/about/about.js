import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function About() {
    return(
        <Container fluid className="vh-100 d-flex flex-column page-content">
            <Row className="h-100">
            <Col xs={6} className="d-flex align-items-center justify-content-center">
            <h1>About Me</h1>
            </Col>
            <Col xs={6} className="d-flex align-items-center justify-content-center">
                <p>My name is Carter White. I am a student at the University of Denver Full-stack web development bootcamp. The purpose of this page is to display my current projects, placeholders for future projects, and provide the abilitiy to get in contact with me.</p>
            </Col>
            </Row>
        </Container>
    )
}