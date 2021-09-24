import { SET_THEME, SET_URL, SET_INFO, SET_PROFILE } from '../types/template'
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
	data: {
		name: 'Muhammad Riza Fauzi Rahman, S.Kom',
		nickname: 'Riza',
		father: 'H. Maman Rahman',
		mother: 'Euis Sopiati, M.M',
		spouse_name: 'Sofi Sajidah Hakim, S.Ds',
		spouse_nickname: 'Sofi',
		spouse_father: 'Dadang Muhajirin, Phd',
		spouse_mother: 'Kinasih Sastrowardoyo',
	},
	loading: false,
	error: false
}

const template = (state = initialState, action) => {
    switch (action.type) {
			case HYDRATE:
				return { ...state }
			case SET_THEME:
				return {
					...state,
					data: {
						...state.data,
						theme: action.payload
					}
				};
			case SET_URL:
				return {
					...state,
					data: {
						...state.data,
						url: action.payload
					}
				};
			case SET_PROFILE:
				return {
					...state,
					data: {
						...state.data,
						[action.payload.name]: action.payload.value
					}
				}
			default:
				return state;
    }
};

export default template;