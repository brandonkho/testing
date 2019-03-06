const theme = (state = {}, action) => {
	switch (action.type) {
		case 'SET_CONTAINER_THEME':
			return Object.assign({}, state, {
        		theme: action.theme
      		})

		default: 
			return state;
	}

}

export default theme;