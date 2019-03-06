import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import PromoTextInput from './PromoTextInput';
import CTAButtonColorInput from './ButtonColorInput';
import SubmitBtn from './SubmitBtn';
import '../../assets/styles/fields-container-styles.css';

class CTAFields extends Component {
  constructor(props) {
    super(props);
  }


 
  render() {
    return (
      <Row className="fields-container cta-fields-container">
        <h5>CTA Module Settings</h5>
        <div className="fields">
          <PromoTextInput />
          <CTAButtonColorInput />

          <SubmitBtn />
        </div>
      </Row>
    );
  }
}


export default CTAFields;
