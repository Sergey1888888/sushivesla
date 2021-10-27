import {ISalads, SaladsAction, SaladsActionTypes} from "../../types/salads";
import {Dispatch} from "redux";
import {saladsItems} from "../../mocks/salads";

export const getSalads = () => {
    return async (dispatch: Dispatch<SaladsAction>) => {
        try {
            dispatch({type: SaladsActionTypes.FETCH_SALADS});
            // Имитация запроса
            const response: ISalads[] = await new Promise(resolve => setTimeout(() => resolve(saladsItems), 500));
            dispatch({type: SaladsActionTypes.FETCH_SALADS_SUCCESS, payload: response});
        } catch (e) {
            dispatch({type: SaladsActionTypes.FETCH_SALADS_ERROR, payload: 'Ошибка!'});
        }
    }
}