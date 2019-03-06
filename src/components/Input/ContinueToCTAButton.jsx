import React, { Component } from 'react';
import { Button} from 'react-bootstrap';
import '../../assets/styles/continue-cta-button.css';

class ContinueToCTAButton extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Button className="cta-continue-button" onClick={this.props.handleClick.bind(this)}>
        Continue
      </Button>
    );
  }
}

export default ContinueToCTAButton;
