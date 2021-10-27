import {ISupy, SupyAction, SupyActionTypes} from "../../types/supy";
import {Dispatch} from "redux";
import {supyItems} from "../../mocks/supy";

export const getSupy = () => {
    return async (dispatch: Dispatch<SupyAction>) => {
        try {
            dispatch({type: SupyActionTypes.FETCH_SUPY});
            // Имитация запроса
            const response: ISupy[] = await new Promise(resolve => setTimeout(() => resolve(supyItems), 500));
            dispatch({type: SupyActionTypes.FETCH_SUPY_SUCCESS, payload: response});
        } catch (e) {
            dispatch({type: SupyActionTypes.FETCH_SUPY_ERROR, payload: 'Ошибка!'});
        }
    }
}