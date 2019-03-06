const previewLink = (state = {}, action) => {
	switch (action.type) {
		case 'PREVIEW_LINK':
			return Object.assign({}, state, {
        		link: action.link
      		})

		default: 
			return state;
	}

}

export default previewLink;