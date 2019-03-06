const logoFile = (state = {}, action) => {
	switch (action.type) {
		case 'ADD_LOGO':
			return Object.assign({}, state, {
        		id: action.id,
        		logoFile: action.logoFile,
      		})

		default: 
			return state;
	}

}

export default logoFile;