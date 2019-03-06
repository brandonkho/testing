const fontStyle = (state = {}, action) => {
	switch (action.type) {
		case 'SET_FONT_STYLE':
			return Object.assign({}, state, {
        		fontStyle: action.font
      		})

		default: 
			return state;
	}

}

export default fontStyle;