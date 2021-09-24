import {
	SET_THEME,
	SET_URL,
	SET_INFO,
	SET_PROFILE
} from '../types/template'

export const setThemeTemplate = (payload) => {
	return ({
		type: SET_THEME,
		payload
 });
} 

export const setUrlTemplate = (payload) => ({
    type: SET_URL,
		payload
});

export const setProfileTemplate = (payload) => ({
    type: SET_PROFILE,
		payload
});

export const setEventTemplate = (payload) => ({
    type: SET_INFO,
		payload
});

