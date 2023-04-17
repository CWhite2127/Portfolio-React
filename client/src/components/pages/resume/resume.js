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
  <Col xs={12} className="d-flex align-items-center justify-content-center">
    <h3>Download My Resume
</h3>
</Col>
  <Col className="d-flex align-items-center justify-content-center">
<button  onClick={onButtonClick}>
Download PDF
</button>
  </Col>
</Row>


</Container>
)
}