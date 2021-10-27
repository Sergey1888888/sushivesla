import {NapitkiAction, NapitkiActionTypes, NapitkiState} from "../../types/napitki";

const initialState: NapitkiState = {
    napitki: [],
    loading: false,
    error: null
}

export const napitkiReducer = (state = initialState, action: NapitkiAction): NapitkiState => {
    switch (action.type) {
        case NapitkiActionTypes.FETCH_NAPITKI:
            return {...state, loading: true}
        case NapitkiActionTypes.FETCH_NAPITKI_SUCCESS:
            return {...state, loading: false, napitki: action.payload}
        case NapitkiActionTypes.FETCH_NAPITKI_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
}