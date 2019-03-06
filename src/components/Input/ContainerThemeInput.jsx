import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap';
import { setContainerTheme } from '../../actions';
import '../../assets/styles/container-theme-input.css';

// onchange, create action to update the store with theme selection

class ContainerThemeInput extends Component {
  constructor(props) {
  	super(props);

  	this.handleChange = this.handleChange.bind(this);
  }

  componentDidUpdate(prevProps) {
  	//console.log('props', this.props.theme);
  }

  handleChange(e) {
  	this.props.dispatch(setContainerTheme(e.target.value))
  }
 
  render() {
    return (
   		<Col md={12} className="container-theme-input">
   			<p>Select Container Theme:</p>
   			<select onChange={this.handleChange}>
  			  <option selected value="#fff">White</option>
  			  <option value="#D8D8D8">Grey</option>
  			  <option value="transparent">Transparent</option>
			  </select>
   		</Col>
    );
  }
}

const mapStateToProps = state => {
	return { theme: state.theme }
}

export default connect(
	mapStateToProps
)(ContainerThemeInput);
