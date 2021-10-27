import {FriedRollsAction, FriedRollsActionTypes, FriedRollsState} from "../../types/friedRolls";

const initialState: FriedRollsState = {
    friedRolls: [],
    loading: false,
    error: null
}

export const friedRollsReducer = (state = initialState, action: FriedRollsAction): FriedRollsState => {
    switch (action.type) {
        case FriedRollsActionTypes.FETCH_FRIED_ROLLS:
            return {...state, loading: true}
        case FriedRollsActionTypes.FETCH_FRIED_ROLLS_SUCCESS:
            return {...state, loading: false, friedRolls: action.payload}
        case FriedRollsActionTypes.FETCH_FRIED_ROLLS_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
}