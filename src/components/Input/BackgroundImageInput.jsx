import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap';
import { addBgFile } from '../../actions';
import '../../assets/styles/file-inputs.css';

// onchange, create action to update the store with theme selection

class BackgroundImageInput extends Component {
  constructor(props) {
  	super(props);

  	this.state = { file: '', src: '' }

  	this.handleChange = this.handleChange.bind(this);
  	this.fileInput = React.createRef();
  }

  componentDidUpdate(prevProps) {
  	//console.log('props', this.props.theme);
  }

  handleChange(e) {
  	let file = e.target.files[0];

  	this.props.dispatch(addBgFile(file))
  }
 
  render() {
    return (
   		<Col md={12} className="bg-input">
   			<p>Upload your Background Image:</p>
   			<div>
          <label htmlFor="file-upload-bg" className="file-upload-button">
            Select file
          </label>
   				<input type="file" ref={this.fileInput} onChange={this.handleChange} id="file-upload-bg" />
   				<img src={this.state.src} />
   			</div>
   		</Col>
    );
  }
}

const mapStateToProps = state => {
	return { bgFile: state.bgFile }
}

export default connect(
	mapStateToProps
)(BackgroundImageInput);
