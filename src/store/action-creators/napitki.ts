import {INapitki, NapitkiAction, NapitkiActionTypes} from "../../types/napitki";
import {Dispatch} from "redux";
import {napitkiItems} from "../../mocks/napitki";

export const getNapitki = () => {
    return async (dispatch: Dispatch<NapitkiAction>) => {
        try {
            dispatch({type: NapitkiActionTypes.FETCH_NAPITKI});
            // Имитация запроса
            const response: INapitki[] = await new Promise(resolve => setTimeout(() => resolve(napitkiItems), 500));
            dispatch({type: NapitkiActionTypes.FETCH_NAPITKI_SUCCESS, payload: response});
        } catch (e) {
            dispatch({type: NapitkiActionTypes.FETCH_NAPITKI_ERROR, payload: 'Ошибка!'});
        }
    }
}