import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import VideoSrcInput from './VideoSrcInput';
import '../../assets/styles/fields-container-styles.css';


class VideoField extends Component {
  constructor(props) {
  	super(props);
  }
 
  render() {
    return (
   		<Row className="fields-container video-field-container">
        <h5>Video Settings</h5>
        <div className="field">
          <VideoSrcInput />
        </div>
      </Row>
    );
  }
}


export default VideoField;
