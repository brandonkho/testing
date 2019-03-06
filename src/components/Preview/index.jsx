import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../../assets/styles/preview.css';
import { Row, Col } from 'react-bootstrap';
import Header from './Header';
import CTAContainer from './CTAContainer';
import SplashContainer from './SplashContainer';
import Navigation from './Navigation';
import Video from './Video';
import PreviewBtn from './PreviewButton';

import iphone from '../../assets/imgs/iphone7.png';

import { setFormView } from '../../actions';

class Preview extends Component {
  constructor(props) {
  	super(props);

  	this.state = { 
      bg: '#f2f2f2', 
      bgPreview: '', 
      component: <SplashContainer />,
      previewBtn: '',
      previewLink: ''
    }

  	this.updateBgImg = this.updateBgImg.bind(this);    
    this.changePreview = this.changePreview.bind(this);
    this.renderPreviewBtn = this.renderPreviewBtn.bind(this);
    this.renderConditional = this.renderConditional.bind(this);
  }

  componentDidUpdate(prevProps) {

    if (prevProps.bgFile.id !== this.props.bgFile.id) {
      this.updateBgImg();
    }

    if (prevProps.submitted !== this.props.submitted) {
      console.log('props: ', this.props.submitted);
      this.renderConditional();
    }

    if (prevProps.previewLink !== this.props.previewLink) {
      this.setState({ previewLink: this.props.previewLink })
    }

  }

  renderConditional() {
    if (!this.props.submitted) {    
      return(
        <Col md={12} className="preview-bg">
          <img src={iphone} className="iphone" />        
          <div className="preview" style={{ backgroundImage: "url("+ this.state.bgPreview +")", backgroundColor: this.state.bg }}>
          <Header />
            
            {this.state.component}

          </div>
        </Col>
      )
    } else {
      return <PreviewBtn />
    }
  }

  changePreview(e) {
    const navItemClicked = e.target.className.toLowerCase();

    this.props.dispatch(setFormView(navItemClicked));

    let component;

    switch(navItemClicked) {
      case 'splash':
        this.setState({
          component: <SplashContainer />
        })
        break;
      case 'cta':
        this.setState({
          component: <CTAContainer />
        });
        break;
      case 'video':
        this.setState({
          component: <Video />
        });
        break;
    }
  }

  renderPreviewBtn() {
    // console.log('submitted: ', this.props.submitted);

    switch(this.props.submitted) {
      case true:
        this.setState({
          component: <PreviewBtn />
        })
        break;
      default:
        break;
    }
  }


  updateBgImg() {
    const file = this.props.bgFile.bgFile;

    let reader = new FileReader();

    reader.onloadend = () => {
      this.setState({
        file,
        bgPreview: reader.result
      })
    }

    reader.readAsDataURL(file)

  }

  render() {
    return (
      <Col md={7}>
        <Navigation changePreview={this.changePreview.bind(this)} />
        <Row className="preview-btn">          
          {this.renderConditional()}
        </Row>
      </Col>
    );
  }
}

const mapStateToProps = state => ({
	bgFile: state.bgFile,
  form: state.formView.formView,
  submitted: state.submitted.submitted,
  previewLink: state.previewLink.previewLink
})

export default connect(mapStateToProps)(Preview);
