import React from 'react';
import Container from 'react-bootstrap/Container';
import './/portfolio.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import fluffy from './fluffy.png'
import Travel from './travel-buddy-screenshot.png'
import Text from './text-editor.png'

export default function Portfolio() {

    const customStyle = {
        color: "white",
        marginBottom: "2.5rem"

    }

    return(
        <Container fluid className="d-flex flex-column page-content">
            <Row className="d-flex justify-content-center">
                <Col xs={12}>
                <div id="centerPiece" class="wrap animate pop">
		<div class="overlay">
			<div class="overlay-content animate slide-left delay-2">
				<h1 id='text' class="animate slide-left pop delay-4">Fluffy</h1>
				<p class="animate slide-left pop delay-5" style={customStyle}></p>
			</div>
			<div class="image-content animate slide delay-5"></div>
					<div class="dots animate">
						<div class="dot animate slide-up delay-6"></div>
						<div class="dot animate slide-up delay-7"></div>
						<div class="dot animate slide-up delay-8"></div>
					</div>
		</div>
			<div id="centerPieceText">
			</div>
	</div>
                </Col>
            </Row>
            <Row className="d-flex justify-content-center">
            <Col>
            <div className="wrap animate pop">
		<div className="overlay">
			<div className="overlay-content animate slide-left delay-2">
				<h1 id='text' className="animate slide-left pop delay-4">Trees</h1>
				<p className="animate slide-left pop delay-5" style={customStyle}></p>
			</div>
			<div className="image-content animate slide delay-5"></div>
					<div className="dots animate">
						<div className="dot animate slide-up delay-6"></div>
						<div className="dot animate slide-up delay-7"></div>
						<div className="dot animate slide-up delay-8"></div>
					</div>
		</div>
			<div className="text">
			</div>
	</div>
            </Col>
            <Col>
            <div class="wrap animate pop">
		<div class="overlay">
			<div class="overlay-content animate slide-left delay-2">
				<h1 id='text' class="animate slide-left pop delay-4">Trees</h1>
				<p class="animate slide-left pop delay-5" style={customStyle}></p>
			</div>
			<div class="image-content animate slide delay-5"></div>
					<div class="dots animate">
						<div class="dot animate slide-up delay-6"></div>
						<div class="dot animate slide-up delay-7"></div>
						<div class="dot animate slide-up delay-8"></div>
					</div>
		</div>
			<div class="text">

			</div>
	</div></Col>
            </Row>
        </Container>
    )
}





