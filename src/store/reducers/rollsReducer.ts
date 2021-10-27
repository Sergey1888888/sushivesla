import {RollsAction, RollsActionTypes, RollsState} from "../../types/rolls";

const initialState: RollsState = {
    rolls: [],
    loading: false,
    error: null
}

export const rollsReducer = (state = initialState, action: RollsAction): RollsState => {
    switch (action.type) {
        case RollsActionTypes.FETCH_ROLLS:
            return {...state, loading: true}
        case RollsActionTypes.FETCH_ROLLS_SUCCESS:
            return {...state, loading: false, rolls: action.payload}
        case RollsActionTypes.FETCH_ROLLS_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
}