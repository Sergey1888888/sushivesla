import {TempuraAction, TempuraActionTypes, TempuraState} from "../../types/tempura";

const initialState: TempuraState = {
    tempura: [],
    loading: false,
    error: null
}

export const tempuraReducer = (state = initialState, action: TempuraAction): TempuraState => {
    switch (action.type) {
        case TempuraActionTypes.FETCH_TEMPURA:
            return {...state, loading: true}
        case TempuraActionTypes.FETCH_TEMPURA_SUCCESS:
            return {...state, loading: false, tempura: action.payload}
        case TempuraActionTypes.FETCH_TEMPURA_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
}