import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap';


class BackgroundColorInput extends Component {
  constructor(props) {
  	super(props);

  	this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate(prevProps) {

  }

  handleChange(e) {
  	
  }
 
  render() {
    return (
   		<Col md={12} className="promo-text-input">
   			<p>Insert Background Color</p>
   	    <input type="text" onChange={this.handleChange} />
   		</Col>
    );
  }
}

const mapStateToProps = state => {
	return { text: state.text }
}

export default connect(
	mapStateToProps
)(BackgroundColorInput);
