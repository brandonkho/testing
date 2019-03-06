import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap';
import '../../assets/styles/splash-container.css';
import Logo from './Logo';
import loader from '../../assets/imgs/loader-animation.gif';

class SplashContainer extends Component {
  constructor(props) {
  	super(props);

  	this.state = { theme: '#fff' };

  	this.udpateBackgroundColor = this.udpateBackgroundColor.bind(this);
  }

  componentDidMount() {
    if(this.props.theme.theme) {
      this.udpateBackgroundColor()
    }
  }

  componentDidUpdate(prevProps) {

  	if (prevProps.theme !== this.props.theme) {
    	this.udpateBackgroundColor();
  	}

  }

  udpateBackgroundColor() {
    this.setState({ theme: this.props.theme.theme })
  }

  render() {
    return (
      <div className="splash-container" style={{ backgroundColor: this.state.theme }}>
      	<p style={{ fontFamily: this.props.font}}>Free Wi-Fi Sponsored By</p>
      	<Logo />

        <div className="loader-animation">
          <img src={loader} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
	return { 
    theme: state.theme,
    font: state.fontStyle.fontStyle
  }
}

export default connect(mapStateToProps)(SplashContainer);
