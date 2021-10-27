import {VokiAction, VokiActionTypes, VokiState} from "../../types/voki";

const initialState: VokiState = {
    voki: [],
    loading: false,
    error: null
}

export const vokiReducer = (state = initialState, action: VokiAction): VokiState => {
    switch (action.type) {
        case VokiActionTypes.FETCH_VOKI:
            return {...state, loading: true}
        case VokiActionTypes.FETCH_VOKI_SUCCESS:
            return {...state, loading: false, voki: action.payload}
        case VokiActionTypes.FETCH_VOKI_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
}