import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap';
import { setCTAButtonColor } from '../../actions';


class CTAButtonColorInput extends Component {
  constructor(props) {
  	super(props);

  	this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate(prevProps) {
  	
  }

  handleChange(e) {
    console.log('changed: ', e.target.value);
  	this.props.dispatch(setCTAButtonColor(e.target.value))
  }
 
  render() {
    return (
   		<Col md={12} className="container-theme-input">
   			<p>Select Button Color:</p>
   			<select onChange={this.handleChange}>
  			  <option selected value="#d42b1e">Red</option>
  			  <option value="#333">Grey</option>
			  </select>
   		</Col>
    );
  }
}

const mapStateToProps = state => {
	return { color: state.ctaButtonColor.ctaButtonColor }
}

export default connect(
	mapStateToProps
)(CTAButtonColorInput);
