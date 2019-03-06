import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import '../../assets/styles/navigation.css';
import { setFormView } from '../../actions';

class Navigation extends Component {
  constructor(props) {
  	super(props);

  }
 
  render() {
    const pages = ['Splash', 'Video', 'CTA'];

    return (
      <Row>
     		<Col md={12} className="nav-container">
     			<ul className="nav">
            {pages.map((page, index) => {
              return <li key={ index } onClick={this.props.changePreview} className={page}>{page}</li>
            })}
          </ul>		
     		</Col>
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  form: state.formView.formView
})

export default connect(mapStateToProps)(Navigation);
