import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap';
import { setFontStyle } from '../../actions';
import '../../assets/styles/font-style-input.css';

// onchange, create action to update the store with theme selection

class FontStyleInput extends Component {
  constructor(props) {
  	super(props);

  	this.state = { }

  	this.handleChange = this.handleChange.bind(this);
  }


  handleChange(e) {
  	this.props.dispatch(setFontStyle(e.target.value))
  }
 
  render() {
    return (
   		<Col md={12} className="font-style-input">
   			<p>Choose Font Style:</p>
   			<select onChange={this.handleChange}>
   				<option selected value="Helvetica">Helvetica</option>
          <option value="Courier">Courier</option>
          <option value="Impact">Impact</option>
   			</select>
   		</Col>
    );
  }
}

const mapStateToProps = state => {
	return { font: state.fontStyle.fontStyle }
}

export default connect(
	mapStateToProps
)(FontStyleInput);
