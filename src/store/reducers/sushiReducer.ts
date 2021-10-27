import {SushiAction, SushiActionTypes, SushiState} from "../../types/sushi";

const initialState: SushiState = {
    sushi: [],
    loading: false,
    error: null
}

export const sushiReducer = (state = initialState, action: SushiAction): SushiState => {
    switch (action.type) {
        case SushiActionTypes.FETCH_SUSHI:
            return {...state, loading: true}
        case SushiActionTypes.FETCH_SUSHI_SUCCESS:
            return {...state, loading: false, sushi: action.payload}
        case SushiActionTypes.FETCH_SUSHI_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
}