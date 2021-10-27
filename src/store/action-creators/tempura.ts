import {ITempura, TempuraAction, TempuraActionTypes} from "../../types/tempura";
import {Dispatch} from "redux";
import {tempuraItems} from "../../mocks/tempura";

export const getTempura = () => {
    return async (dispatch: Dispatch<TempuraAction>) => {
        try {
            dispatch({type: TempuraActionTypes.FETCH_TEMPURA});
            // Имитация запроса
            const response: ITempura[] = await new Promise(resolve => setTimeout(() => resolve(tempuraItems), 500));
            dispatch({type: TempuraActionTypes.FETCH_TEMPURA_SUCCESS, payload: response});
        } catch (e) {
            dispatch({type: TempuraActionTypes.FETCH_TEMPURA_ERROR, payload: 'Ошибка!'});
        }
    }
}