import {SaladsAction, SaladsActionTypes, SaladsState} from "../../types/salads";

const initialState: SaladsState = {
    salads: [],
    loading: false,
    error: null
}

export const saladsReducer = (state = initialState, action: SaladsAction): SaladsState => {
    switch (action.type) {
        case SaladsActionTypes.FETCH_SALADS:
            return {...state, loading: true}
        case SaladsActionTypes.FETCH_SALADS_SUCCESS:
            return {...state, loading: false, salads: action.payload}
        case SaladsActionTypes.FETCH_SALADS_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
}