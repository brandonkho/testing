import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { submitForm, previewLink } from '../../actions';
import '../../assets/styles/submitBtn.css';


class SubmitBtn extends Component {
	constructor(props) {
		super(props);

		this.sendData = this.sendData.bind(this);
	}

	sendData() {

		
			this.props.dispatch(submitForm(true));
			this.props.dispatch(previewLink('http://nimbus.c9w.net/static/loginpages/boingo/BoingoMedia.html?venue=test_branded1b&__c9auth=1&__c9inter=%2Fwifi%2Fpromos%2Fcfc038daec18446d871caa88957f8a2a%2F%3F__v%3DX19maWQ9Y2ZjMDM4ZGFlYzE4NDQ2ZDg3MWNhYTg4OTU3ZjhhMmEmX192ZW51ZV9pZD10ZXN0X2JyYW5kZWQxYiZfX3Rlc3Q9MSZfX2ZvcmNlc3RhdGU9MQ%253D%253D%26is_single_click%3Dtrue%26uid%3Dm1_ff1e347ad6c619702d2b06fa3ac9dbec&is_single_click=true&__c9p=cfc038daec18446d871caa88957f8a2a'))
		
	}

	render() {
		return(
			<Button onClick={this.sendData} className="submit-btn">
				Submit
			</Button>
		)
	}
}

const mapStateToProps = state => ({
	submitted: state.submitted.submitted
})

export default connect(mapStateToProps)(SubmitBtn);