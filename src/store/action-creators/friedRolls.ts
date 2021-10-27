import {IFriedRolls, FriedRollsAction, FriedRollsActionTypes} from "../../types/friedRolls";
import {Dispatch} from "redux";
import {friedRollsItems} from "../../mocks/friedRolls";

export const getFriedRolls = () => {
    return async (dispatch: Dispatch<FriedRollsAction>) => {
        try {
            dispatch({type: FriedRollsActionTypes.FETCH_FRIED_ROLLS});
            // Имитация запроса
            const response: IFriedRolls[] = await new Promise(resolve => setTimeout(() => resolve(friedRollsItems), 500));
            dispatch({type: FriedRollsActionTypes.FETCH_FRIED_ROLLS_SUCCESS, payload: response});
        } catch (e) {
            dispatch({type: FriedRollsActionTypes.FETCH_FRIED_ROLLS_ERROR, payload: 'Ошибка!'});
        }
    }
}