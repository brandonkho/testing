import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap';
import { addLogo } from '../../actions';
import { logoFileAdded } from '../../actions'
import '../../assets/styles/logo-input.css';
import '../../assets/styles/file-inputs.css';


class LogoInput extends Component {
  constructor(props) {
  	super(props);

  	this.state = { file: '', src: '' }

  	this.handleChange = this.handleChange.bind(this);
  	this.fileInput = React.createRef();
  }


  handleChange(e) {
  	let file = e.target.files[0];

  	this.props.dispatch(addLogo(file))
  }
 
  render() {
    return (
   		<Col md={12} className="logo-input">
   			<div>
          <p>Upload your Logo:</p>
          <label htmlFor="file-upload-logo" id="file-upload-button-logo">
            Select file
          </label>
   				<input type="file" ref={this.fileInput} onChange={this.handleChange} id="file-upload-logo"/>
   				<img src={this.state.src} />
   			</div>
   		</Col>
    );
  }
}

const mapStateToProps = state => {
	return { logoFile: state.logoFile }
}

export default connect(
	mapStateToProps
)(LogoInput);
