import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap';
import { setPromoText } from '../../actions';
import '../../assets/styles/promo-text-input.css';

// onchange, create action to update the store with theme selection

class PromoTextInput extends Component {
  constructor(props) {
  	super(props);

    this.state = {
      placeholder: 'Promotional Text Here'
    }

  	this.handleChange = this.handleChange.bind(this);
  }

  component

  componentDidUpdate(prevProps) {
  	//console.log('props', this.props.theme);
    if (prevProps.text.text !== this.props.text.text) {
      this.handleChange();
    }
  }

  handleChange(e) {
  	this.props.dispatch(setPromoText(e.target.value))
  }
 
  render() {
    return (
   		<Col md={12} className="promo-text-input">
   			<p>Insert Promo Text:</p>
   	    <textarea type="text" onChange={this.handleChange} placeholder={this.state.placeholder}>
        </textarea>
   		</Col>
    );
  }
}

const mapStateToProps = state => {
	return { text: state.text }
}

export default connect(
	mapStateToProps
)(PromoTextInput);
