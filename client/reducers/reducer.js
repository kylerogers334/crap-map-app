import {
    LOAD_US_STATES_DATA,
    FETCH_CATEGORY_STATE_SUCCESS,
    FETCH_CATEGORY_STATE_ERROR,
    FETCH_CATEGORY_COUNTY_SUCCESS,
    FETCH_CATEGORY_COUNTY_ERROR,
} from '../actions/actionHandleData.js';

import {
    SHOW_OVERLAY, 
    HIDE_OVERLAY
} from '../actions/actionOverlay.js';

import {
    SET_FORM_SELECT,
} from '../actions/actionForm.js';

const initialState = {
    usStatesData: null,
    displayOverlay: false,
    enlargedState: null,
    formSelection: null,
    categoryStateData: null,
    categoryCountyData: null,
    categoryName: null,
};

export default function(state=initialState, action) {
    console.log('Action dispatched:', action.type);
    switch (action.type) {
        case LOAD_US_STATES_DATA: 
            return Object.assign({}, state, {usStatesData: action.usStatesData});
        case SHOW_OVERLAY:
            return Object.assign({}, state, {displayOverlay: true}, 
                            {enlargedState: action.enlargedState});
        case HIDE_OVERLAY: 
            return Object.assign({}, state, {displayOverlay: false});
        case SET_FORM_SELECT:
            return Object.assign({}, state, {formSelection: action.selection});
        case FETCH_CATEGORY_STATE_SUCCESS:
            return Object.assign({}, state, {
                categoryStateData: action.data,
                categoryName: action.data.category
            });
        case FETCH_CATEGORY_STATE_ERROR:{
            console.error(action.error); return state;
        }
        case FETCH_CATEGORY_COUNTY_SUCCESS:
            return Object.assign({}, state, {
                categoryCountyData: action.data,
                categoryName: action.data.category
            });
        case FETCH_CATEGORY_COUNTY_ERROR:{
            console.error(action.error); return state;
        }
        default: return state;
    }
}