import { combineReducers } from 'redux'
import theme from './setContainerTheme';
import logoFile from './addLogo';
import bgFile from './addBgFile';
import promoText from './setPromoText';
import displayCTA from './displayCTA';
import logoFileAdded from './logoFileAdded';
import fontStyle from './fontStyle';
import formView from './setFormView';
import ctaButtonColor from './setCtaBtnColor';
import submitted from './submitForm';
import previewLink from './previewLink';

export default combineReducers({
	theme,
	logoFile,
	bgFile,
	promoText,
	displayCTA,
	logoFileAdded,
	fontStyle,
	formView,
	ctaButtonColor,
	submitted,
	previewLink
})