import {ISushi, SushiAction, SushiActionTypes} from "../../types/sushi";
import {Dispatch} from "redux";
import {sushiItems} from "../../mocks/sushi";

export const getSushi = () => {
    return async (dispatch: Dispatch<SushiAction>) => {
        try {
            dispatch({type: SushiActionTypes.FETCH_SUSHI});
            // Имитация запроса
            const response: ISushi[] = await new Promise(resolve => setTimeout(() => resolve(sushiItems), 500));
            dispatch({type: SushiActionTypes.FETCH_SUSHI_SUCCESS, payload: response});
        } catch (e) {
            dispatch({type: SushiActionTypes.FETCH_SUSHI_ERROR, payload: 'Ошибка!'});
        }
    }
}