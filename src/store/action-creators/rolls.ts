import {IRolls, RollsAction, RollsActionTypes} from "../../types/rolls";
import {Dispatch} from "redux";
import {rollsItems} from "../../mocks/rolls";

export const getRolls = () => {
    return async (dispatch: Dispatch<RollsAction>) => {
        try {
            dispatch({type: RollsActionTypes.FETCH_ROLLS});
            // Имитация запроса
            const response: IRolls[] = await new Promise(resolve => setTimeout(() => resolve(rollsItems), 500));
            dispatch({type: RollsActionTypes.FETCH_ROLLS_SUCCESS, payload: response});
        } catch (e) {
            dispatch({type: RollsActionTypes.FETCH_ROLLS_ERROR, payload: 'Ошибка!'});
        }
    }
}