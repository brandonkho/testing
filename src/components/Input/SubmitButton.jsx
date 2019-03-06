import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Button } from 'react-bootstrap';

class SubmitButton extends Component {
	constructor(props) {
		super(props);

		this.sendData = this.sendData.bind(this);
	}

	sendData() {
		console.log('send data');
	}

	render() {
		return (
			<Col md={12}>
				<Button onClick={this.sendData}>
					Submit
				</Button>
			</Col>
		)
	}
}

const mapStateToProps = state => ({
	// all form values
})

export default connect(mapStateToProps)(SubmitButton);