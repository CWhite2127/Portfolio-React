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
			<div id="image-content" class="animate slide delay-5"></div>
					<div class="dots animate">
						<div class="dot animate slide-up delay-6"></div>
						<div class="dot animate slide-up delay-7"></div>
						<div class="dot animate slide-up delay-8"></div>
					</div>
		</div>
			<div id="wrapper" className="centerPieceText">
                <a href="https://enigmatic-falls-71377.herokuapp.com/">
                <button>
                    Check Out Fluffy
                </button>
                </a>
			</div>
	</div>
                </Col>
            </Row>
            <Row className="d-flex justify-content-center">
            <Col>
            <div className="wrap animate pop">
		<div className="overlay">
			<div className="overlay-content animate slide-left delay-2">
				<h1 id='text' className="animate slide-left pop delay-4">Travel Buddy</h1>
				<p className="animate slide-left pop delay-5" style={customStyle}></p>
			</div>
			<div id="image-content-Travel" className="animate slide delay-5"></div>
					<div className="dots animate">
						<div className="dot animate slide-up delay-6"></div>
						<div className="dot animate slide-up delay-7"></div>
						<div className="dot animate slide-up delay-8"></div>
					</div>
		</div>
			<div id="wrapper" className="text">
            <a href='https://hollyhleal.github.io/travel-buddy/'>
            <button>
                Check Out Travel Buddy
            </button>
            </a>
			</div>
	</div>
            </Col>
            <Col>
            <div class="wrap animate pop">
		<div class="overlay">
			<div class="overlay-content animate slide-left delay-2">
				<h1 id='text' class="animate slide-left pop delay-4">Text Editor</h1>
				<p class="animate slide-left pop delay-5" style={customStyle}></p>
			</div>
			<div id="image-content-Text" class="animate slide delay-5"></div>
					<div class="dots animate">
						<div class="dot animate slide-up delay-6"></div>
						<div class="dot animate slide-up delay-7"></div>
						<div class="dot animate slide-up delay-8"></div>
					</div>
		</div>
			<div id="wrapper" class="text">
                <a href="https://hidden-cove-97282.herokuapp.com/">
                <button>
                    Check Out
                    Text-Editor
                </button>
                </a>

			</div>
	</div></Col>
            </Row>
            <Row className="d-flex justify-content-center">
            <Col>
            <div className="wrap animate pop">
		<div className="overlay">
			<div className="overlay-content animate slide-left delay-2">
				<h1 id='text' className="animate slide-left pop delay-4">Note Taker</h1>
				<p className="animate slide-left pop delay-5" style={customStyle}></p>
			</div>
			<div id="image-content-Note" className="animate slide delay-5"></div>
					<div className="dots animate">
						<div className="dot animate slide-up delay-6"></div>
						<div className="dot animate slide-up delay-7"></div>
						<div className="dot animate slide-up delay-8"></div>
					</div>
		</div>
			<div id="wrapper" className="text">\
            <a href="https://calm-reef-26796.herokuapp.com/">
                <button>
                    Check Out Note Taker
                </button>
            </a>
			</div>
	</div>
            </Col>
            <Col>
            <div class="wrap animate pop">
		<div class="overlay">
			<div class="overlay-content animate slide-left delay-2">
				<h1 id='text' class="animate slide-left pop delay-4">Weather Dashboard</h1>
				<p class="animate slide-left pop delay-5" style={customStyle}></p>
			</div>
			<div id="image-content-Weather" class="animate slide delay-5"></div>
					<div class="dots animate">
						<div class="dot animate slide-up delay-6"></div>
						<div class="dot animate slide-up delay-7"></div>
						<div class="dot animate slide-up delay-8"></div>
					</div>
		</div>
			<div id="wrapper" class="text">
            <a href="https://av720.github.io/Weather-Dashboard/">
                <button>
                    Check Out Weather Dash
                </button>
            </a>

			</div>
	</div></Col>
            </Row>
        </Container>
    )
}





