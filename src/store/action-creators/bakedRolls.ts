import {IBakedRolls, BakedRollsAction, BakedRollsActionTypes} from "../../types/bakedRolls";
import {Dispatch} from "redux";
import {bakedRollsItems} from "../../mocks/bakedRolls";

export const getBakedRolls = () => {
    return async (dispatch: Dispatch<BakedRollsAction>) => {
        try {
            dispatch({type: BakedRollsActionTypes.FETCH_BAKED_ROLLS});
            // Имитация запроса
            const response: IBakedRolls[] = await new Promise(resolve => setTimeout(() => resolve(bakedRollsItems), 500));
            dispatch({type: BakedRollsActionTypes.FETCH_BAKED_ROLLS_SUCCESS, payload: response});
        } catch (e) {
            dispatch({type: BakedRollsActionTypes.FETCH_BAKED_ROLLS_ERROR, payload: 'Ошибка!'});
        }
    }
}