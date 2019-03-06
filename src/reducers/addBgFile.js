const bgFile = (state = {}, action) => {
	switch (action.type) {
		case 'ADD_BG_FILE':
			return Object.assign({}, state, {
        		id: action.id,
        		bgFile: action.bgFile,
      		})

		default: 
			return state;
	}

}

export default bgFile;