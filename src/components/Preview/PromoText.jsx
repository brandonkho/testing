import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap';
import '../../assets/styles/promo-text.css';

class PromoText extends Component {
  constructor(props) {
  	super(props);

    this.state = { 
      promoText: '[Promotional Text Here]',
    }

  	this.updatePromoText = this.updatePromoText.bind(this);
  }


  componentDidMount() {
    if (this.props.promoText.promoText) {
      this.updatePromoText()
    }
  }

  componentDidUpdate(prevProps) {

    if (prevProps.promoText.promoText !== this.props.promoText.promoText) {
      this.updatePromoText();
    }

  }

  updatePromoText() {
    this.setState({ promoText: this.props.promoText.promoText.toUpperCase() })
  }

  render() {
    return (
      <div className="promo-text">
        <p style={{ fontFamily: this.props.fontStyle }}>{this.state.promoText}</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
	return { 
    promoText: state.promoText,
    fontStyle: state.fontStyle.fontStyle
  }
}

export default connect(mapStateToProps)(PromoText);
