import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, FormGroup, Form } from 'react-bootstrap';
import GlobalFields from './GlobalFields';
import VideoField from './VideoField';
import CTAFields from './CTAFields';


class Input extends Component {
  constructor(props) {
    super(props);

    this.state = { formView: '' }

    this.renderNextFieldSet = this.renderNextFieldSet.bind(this);
    
  }

  componentDidUpdate(prevProps) {
    if (prevProps.form !== this.props.form) {
      this.renderNextFieldSet();
    }
  }

  renderNextFieldSet() {
    const formView = this.props.form;

    switch(formView) {
      case 'splash':
        this.setState({
          formView: ''
        });
        break;
      case 'video':
        this.setState({
          formView: <VideoField />
        });
        break;
      case 'cta':
        this.setState({
          formView: <CTAFields />
        });
        break;
    }
  }

  render() {
    return (
      <Col md={5}>
        <GlobalFields />
        {this.state.formView}
      </Col>
    );
  }
}

const mapStateToProps = state => ({
  form: state.formView.formView
})

export default connect(mapStateToProps)(Input);
