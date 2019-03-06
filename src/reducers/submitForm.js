const submitted = (state = {}, action) => {
	switch (action.type) {
		case 'SUBMIT_FORM':
			return Object.assign({}, state, {
        		submitted: action.submitted
      		})

		default: 
			return state;
	}

}

export default submitted;