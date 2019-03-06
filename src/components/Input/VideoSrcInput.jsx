import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap';
import '../../assets/styles/fields-container-styles.css';
import '../../assets/styles/file-inputs.css';


class VideoSrcInput extends Component {
  constructor(props) {
  	super(props);

  }
 
  render() {
    return (
   		<Col md={12} className="promo-text-input">
   			<p>Upload Video URL:</p>
        <label htmlFor="file-upload" className="file-upload-button">
          Select file
        </label>
   	    <input type="file" onChange={this.handleChange} />
   		</Col>
    );
  }
}

const mapStateToProps = state => {
	return { text: state.text }
}

export default connect(
	mapStateToProps
)(VideoSrcInput);
