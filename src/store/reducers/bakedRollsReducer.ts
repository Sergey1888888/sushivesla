import {BakedRollsAction, BakedRollsActionTypes, BakedRollsState} from "../../types/bakedRolls";

const initialState: BakedRollsState = {
    bakedRolls: [],
    loading: false,
    error: null
}

export const bakedRollsReducer = (state = initialState, action: BakedRollsAction): BakedRollsState => {
    switch (action.type) {
        case BakedRollsActionTypes.FETCH_BAKED_ROLLS:
            return {...state, loading: true}
        case BakedRollsActionTypes.FETCH_BAKED_ROLLS_SUCCESS:
            return {...state, loading: false, bakedRolls: action.payload}
        case BakedRollsActionTypes.FETCH_BAKED_ROLLS_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }
}