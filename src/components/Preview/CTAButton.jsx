import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../../assets/styles/cta-button.css';

const CTAButton = ({ text, color }) => (
	<Button className="cta-button" style={{ backgroundColor: color }}>
		{ text }
	</Button>
)

export default CTAButton;