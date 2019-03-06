import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../../assets/styles/cta-container.css';
import { Row, Col } from 'react-bootstrap';
import Logo from './Logo';
import PromoText from './PromoText';
import CTAButton from './CTAButton';
import { setCTAButtonColor } from '../../actions';

class CTAContainer extends Component {
  constructor(props) {
  	super(props);

  	this.state = { 
      theme: '#fff',
      learnMoreColor: '#d42b1e'
    };

  	this.udpateBackgroundColor = this.udpateBackgroundColor.bind(this);
    this.updateCTAColor = this.updateCTAColor.bind(this);
  }

  componentDidMount() {
    if(this.props.theme.theme) {
      this.udpateBackgroundColor()
    }

    if (this.props.color) {
      this.updateCTAColor()
    }
  }

  componentDidUpdate(prevProps) {
    console.log('prevProps: ', prevProps.color, ' props: ', this.props.color);

  	if (prevProps.theme !== this.props.theme) {
    	this.udpateBackgroundColor();
  	}

    if(prevProps.color.color !== this.props.color.color) {
      this.updateCTAColor();
    }

  }

  udpateBackgroundColor() {
    this.setState({ theme: this.props.theme.theme })
  }

  updateCTAColor() {
    this.setState({ learnMoreColor: this.props.color.color })
  }

  render() {
    return (
      <div className="cta-container" style={{ backgroundColor: this.state.theme }}>
        <Logo />
        <PromoText />

        <div className="cta-btns-container">
          <CTAButton text={'Wi-Fi Connect & Learn More'} color={this.state.learnMoreColor} />
          <CTAButton text={'No Thanks, Just Take Me Online'} color={'#dddddd'} />
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => {
	return { 
    theme: state.theme,
    color: state.ctaButtonColor
  }
}

export default connect(mapStateToProps)(CTAContainer);
