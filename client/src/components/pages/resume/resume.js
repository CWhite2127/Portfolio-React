import React from 'react';
import './/resume.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Resume () {

    const onButtonClick = () => {
        fetch('Carter_White_resume.docx.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = "Carter_White_Resume.docx.pdf";
                alink.download = 'Carter_White_Resume.docx.pdf';
                alink.click();
            })
        })
    }
    return(
<Container fluid className="vh-100 d-flex flex-column page-content">
  <Row className="h-100">
  <Col xs={6} className="d-flex align-items-center justify-content-center">
    <h1 id="header">Download My Resume
</h1>
</Col>
  <Col className="d-flex align-items-center justify-content-center">
<button  onClick={onButtonClick}>
Download PDF
</button>
  </Col>
</Row>
<Row>
  <Col xs={12} className="d-flex align-items-center justify-content-center">
  <h2 id="header">Proficiencies</h2>
  </Col>
</Row>
<Row>
  <Col className="d-flex align-items-center justify-content-center">
  <h3 id="header">Front-End</h3>
  </Col>
  </Row>
  <Row>
  <Col className="d-flex align-items-center justify-content-center">
  <i id="spacing" class="fa-brands fa-square-js fa-2xl"> Javascript</i>
  <i id="spacing" class="fa-brands fa-css3-alt fa-2xl"> CSS</i>
  <i class="fa-brands fa-html5 fa-2xl"> HTML</i>
  <i id="spacing" class="fa-brands fa-react fa-2xl"> React</i>
  <i id="spacing" class="fa-brands fa-bootstrap fa-2xl"> Bootstrap</i>
  </Col>
  </Row>
  <Row>
  <Col className="d-flex align-items-center justify-content-center">
  <h3 id="header">Back-End</h3>
  </Col>
  </Row>
  <Row>
  <Col className="d-flex align-items-center justify-content-center">
  <i id="spacing" class="fa-brands fa-node fa-2xl"> NodeJS</i>
  <i id="spacing" class="fa-solid fa-database fa-2xl"> SQL</i>
  <i id="spacing" class="fa-sharp fa-solid fa-database fa-2xl"> MongoDB</i>
  <i id="spacing" class="fa-solid fa-diagram-project fa-2xl"> GraphQL</i>
  </Col>
  </Row>
</Container>
)
}