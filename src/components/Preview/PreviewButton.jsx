import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import '../../assets/styles/submitBtn.css';


class PreviewBtn extends Component {
	constructor(props) {
		super(props);

		this.state = { link: '#' }

		this.viewPromo = this.viewPromo.bind(this);
	}

	viewPromo() {
		window.open ("http://nimbus.c9w.net/static/loginpages/boingo/BoingoMedia.html?venue=test_branded1b&__c9auth=1&__c9inter=%2Fwifi%2Fpromos%2Fcfc038daec18446d871caa88957f8a2a%2F%3F__v%3DX19maWQ9Y2ZjMDM4ZGFlYzE4NDQ2ZDg3MWNhYTg4OTU3ZjhhMmEmX192ZW51ZV9pZD10ZXN0X2JyYW5kZWQxYiZfX3Rlc3Q9MSZfX2ZvcmNlc3RhdGU9MQ%253D%253D%26is_single_click%3Dtrue%26uid%3Dm1_ff1e347ad6c619702d2b06fa3ac9dbec&is_single_click=true&__c9p=cfc038daec18446d871caa88957f8a2a",
			"mywindow","menubar=1,resizable=1,width=375,height=600");
	}

	render() {
		return(
			<Button onClick={this.viewPromo} className="submit-btn">
				View Promo
			</Button>
		)
	}
}

export default PreviewBtn;