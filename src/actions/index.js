let id = 0;

export const addLogo = logoFile => ({
	type: 'ADD_LOGO',
	id: id++,
	logoFile
})

export const addBgFile = bgFile => ({
	type: 'ADD_BG_FILE',
	id: id++,
	bgFile
})

export const setContainerTheme = theme => ({
	type: 'SET_CONTAINER_THEME',
	theme
})

export const setPromoText = promoText => ({
	type: 'SET_PROMO_TEXT',
	promoText
})

export const displayCTA = display => ({
	type: 'DISPLAY_CTA',
	display
})

export const logoFileAdded = added => ({
	type: 'LOGO_FILE_ADDED',
	added
})

export const setFontStyle = font => ({
	type: 'SET_FONT_STYLE',
	font
})

export const setFormView = form => ({
	type: 'SET_FORM_VIEW',
	form
})

export const setCTAButtonColor = color => ({
	type: 'SET_CTA_BTN_COLOR',
	color
})

export const submitForm = submitted => ({
	type: 'SUBMIT_FORM',
	submitted
})

export const previewLink = link => ({
	type: 'PREVIEW_LINK',
	link
})