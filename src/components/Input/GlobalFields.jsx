import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import BackgroundImageInput from './BackgroundImageInput';
import ContainerThemeInput from './ContainerThemeInput';
import FontStyleInput from './FontStyleInput';
import LogoInput from './LogoInput';
import '../../assets/styles/globalFields.css';


class GlobalFields extends Component {
  constructor(props) {
  	super(props);
  }
 
  render() {
    return (
   		<Row className="fields-container global-fields-container">
        <h5>Global Promo Settings - <span className="global-msg">values applied to all pages</span></h5>
        <div className="global-fields">
          <BackgroundImageInput />
          <FontStyleInput />
          <ContainerThemeInput />
          <LogoInput />
        </div>
      </Row>
    );
  }
}


export default GlobalFields;
