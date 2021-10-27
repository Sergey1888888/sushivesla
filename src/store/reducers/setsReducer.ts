import {SetsAction, SetsActionTypes, SetsState} from "../../types/sets";

const initialState: SetsState = {
    sets: [],
    loading: false,
    error: null
}

export const setsReducer = (state = initialState, action: SetsAction): SetsState => {
    switch (action.type) {
        case SetsActionTypes.FETCH_SETS:
            return {...state, loading: true}
        case SetsActionTypes.FETCH_SETS_SUCCESS:
            return {...state, loading: false, sets: action.payload}
        case SetsActionTypes.FETCH_SETS_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
}