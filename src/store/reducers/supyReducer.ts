import {SupyAction, SupyActionTypes, SupyState} from "../../types/supy";

const initialState: SupyState = {
    supy: [],
    loading: false,
    error: null
}

export const supyReducer = (state = initialState, action: SupyAction): SupyState => {
    switch (action.type) {
        case SupyActionTypes.FETCH_SUPY:
            return {...state, loading: true}
        case SupyActionTypes.FETCH_SUPY_SUCCESS:
            return {...state, loading: false, supy: action.payload}
        case SupyActionTypes.FETCH_SUPY_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
}