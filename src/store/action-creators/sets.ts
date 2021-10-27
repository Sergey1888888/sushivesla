import {ISets, SetsAction, SetsActionTypes} from "../../types/sets";
import {Dispatch} from "redux";
import {setsItems} from "../../mocks/sets";

export const getSets = () => {
    return async (dispatch: Dispatch<SetsAction>) => {
        try {
            dispatch({type: SetsActionTypes.FETCH_SETS});
            // Имитация запроса
            const response: ISets[] = await new Promise(resolve => setTimeout(() => resolve(setsItems), 500));
            dispatch({type: SetsActionTypes.FETCH_SETS_SUCCESS, payload: response});
        } catch (e) {
            dispatch({type: SetsActionTypes.FETCH_SETS_ERROR, payload: 'Ошибка!'});
        }
    }
}