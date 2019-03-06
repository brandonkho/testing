const ctaButtonColor = (state = {}, action) => {
	switch (action.type) {
		case 'SET_CTA_BTN_COLOR':
			return Object.assign({}, state, {
        		color: action.color
      		})

		default: 
			return state;
	}

}

export default ctaButtonColor;