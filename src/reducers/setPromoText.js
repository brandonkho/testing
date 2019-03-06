const promoText = (state = {}, action) => {
	switch (action.type) {
		case 'SET_PROMO_TEXT':
			return Object.assign({}, state, {
        		promoText: action.promoText
      		})

		default: 
			return state;
	}

}

export default promoText;