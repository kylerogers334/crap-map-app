import * as types from './actions/actionTypes.js';

const initialState = {
	categoryCountyData: null,
	categoryName: null,
	categoryStateData: null,
	color: 'blue',
	displayOverlay: false,
	enlargedState: null,
	showModalType: false,
	usStatesLineData: null
};

export default (state = initialState, action) => {
	switch (action.type) {
		case types.LOAD_US_STATES_DATA:
			return { ...state, usStatesLineData: action.usStatesLineData };

		case types.CHANGE_COLOR:
			return { ...state, color: action.color };

		case types.SHOW_OVERLAY:
			return {
				...state,
				displayOverlay: true,
				enlargedState: action.enlargedState
			};

		case types.HIDE_OVERLAY:
			return {
				...state,
				displayOverlay: false,
				enlargedState: null
			};

		case types.CLEAR_MAP:
			return {
				...state,
				categoryStateData: null,
				categoryCountyData: null,
				categoryName: null
			};

		case types.FETCH_CATEGORY_STATE_SUCCESS:
			return {
				...state,
				categoryStateData: action.data,
				categoryName: action.category
			};

		case types.FETCH_CATEGORY_STATE_ERROR:
			console.error(action.error);
			return state;

		case types.FETCH_CATEGORY_COUNTY_SUCCESS:
			return {
				...state,
				categoryCountyData: action.data,
				categoryName: action.category
			};

		case types.FETCH_CATEGORY_COUNTY_ERROR:
			console.error(action.error);
			return state;

		case types.SHOW_MODAL:
			return { ...state, showModalType: action.modalType };

		case types.HIDE_MODAL:
			return { ...state, showModalType: false };

		default:
			return state;
	}
};
