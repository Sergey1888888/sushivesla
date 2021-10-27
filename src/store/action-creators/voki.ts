import {IVoki, VokiAction, VokiActionTypes} from "../../types/voki";
import {Dispatch} from "redux";
import {vokiItems} from "../../mocks/voki";

export const getVoki = () => {
    return async (dispatch: Dispatch<VokiAction>) => {
        try {
            dispatch({type: VokiActionTypes.FETCH_VOKI});
            // Имитация запроса
            const response: IVoki[] = await new Promise(resolve => setTimeout(() => resolve(vokiItems), 500));
            dispatch({type: VokiActionTypes.FETCH_VOKI_SUCCESS, payload: response});
        } catch (e) {
            dispatch({type: VokiActionTypes.FETCH_VOKI_ERROR, payload: 'Ошибка!'});
        }
    }
}