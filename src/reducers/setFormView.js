const formView = (state = {}, action) => {
	switch (action.type) {
		case 'SET_FORM_VIEW':
			return Object.assign({}, state, {
        		formView: action.form
      		})

		default: 
			return state;
	}

}

export default formView;