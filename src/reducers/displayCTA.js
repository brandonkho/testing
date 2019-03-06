const displayCTA = (state = {}, action) => {
	switch (action.type) {
		case 'DISPLAY_CTA':
			return Object.assign({}, state, {
        		display: action.display
      		})

		default: 
			return state;
	}

}

export default displayCTA;