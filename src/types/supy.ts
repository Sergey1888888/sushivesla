export interface ISupy {
    id: string;
    name: string;
    description: string;
    weight: number;
    price: number;
    image: string;
    color?: string;
}

export interface SupyState {
    supy: ISupy[];
    loading: boolean;
    error: null | string;
}

export enum SupyActionTypes {
    FETCH_SUPY = "FETCH_SUPY",
    FETCH_SUPY_SUCCESS = "FETCH_SUPY_SUCCESS",
    FETCH_SUPY_ERROR = "FETCH_SUPY_ERROR"
}

interface FetchSupyAction {
    type: SupyActionTypes.FETCH_SUPY;
}

interface FetchSupySuccessAction {
    type: SupyActionTypes.FETCH_SUPY_SUCCESS;
    payload: ISupy[];
}

interface FetchSupyErrorAction {
    type: SupyActionTypes.FETCH_SUPY_ERROR;
    payload: string;
}

export type SupyAction = FetchSupyAction | FetchSupySuccessAction | FetchSupyErrorAction;