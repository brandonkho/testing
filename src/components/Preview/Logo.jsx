import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../../assets/styles/logo.css';
import { Row, Col } from 'react-bootstrap';

class Logo extends Component {
  constructor(props) {
  	super(props);

    this.state = { 
      file: '',
      logoPreview: '' ,
      placeholderText: 'Logo goes here'
    }

  	this.updateLogo = this.updateLogo.bind(this);
    this.renderLogo = this.renderLogo.bind(this);
  }

  componentDidMount() {  
    if (typeof this.props.logoFile.id === "number") {
      this.updateLogo();
    } 
  }

  componentDidUpdate(prevProps) {
    console.log('prevProps: ', prevProps.logoFile.id);

    if (prevProps.logoFile.id !== this.props.logoFile.id) {
      this.updateLogo();
    }

  }

  updateLogo() {
    let reader = new FileReader();

    reader.onloadend = () => {
      this.setState({
        file: this.props.logoFile.logoFile,
        logoPreview: reader.result
      })
    }

    reader.readAsDataURL(this.props.logoFile.logoFile)

  }

  renderLogo() { 

    return (<img src={this.state.logoPreview} className="logo"/>)
  }

  render() {
    return (
      <div className="logo-container">
        {this.renderLogo()}
      </div>
    );
  }
}

const mapStateToProps = state => {
	return { 
    logoFile: state.logoFile
  }
}

export default connect(mapStateToProps)(Logo);
