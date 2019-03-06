import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap';
import '../../assets/styles/video.css';

class Video extends Component {
  constructor(props) {
  	super(props);

  	this.state = { videoSrc: '' };
  }

  componentDidUpdate(prevProps) {

  }

  render() {
    return (
      <div className="video">
      	
      </div>
    );
  }
}

export default connect()(Video);
