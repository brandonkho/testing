const logoFileAdded = (state = {}, action) => {
	switch (action.type) {
		case 'LOGO_FILE_ADDED':
			return Object.assign({}, state, {
        		logoFileAdded: action.logoFileAdded
      		})

		default: 
			return state;
	}

}

export default logoFileAdded;