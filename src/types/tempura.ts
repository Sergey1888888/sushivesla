export interface ITempura {
    id: string;
    name: string;
    description: string;
    weight: number;
    count?: number;
    personCount?: number;
    price: number;
    image: string;
}

export interface TempuraState {
    tempura: ITempura[];
    loading: boolean;
    error: null | string;
}

export enum TempuraActionTypes {
    FETCH_TEMPURA = "FETCH_TEMPURA",
    FETCH_TEMPURA_SUCCESS = "FETCH_TEMPURA_SUCCESS",
    FETCH_TEMPURA_ERROR = "FETCH_TEMPURA_ERROR"
}

interface FetchTempuraAction {
    type: TempuraActionTypes.FETCH_TEMPURA;
}

interface FetchTempuraSuccessAction {
    type: TempuraActionTypes.FETCH_TEMPURA_SUCCESS;
    payload: ITempura[];
}

interface FetchTempuraErrorAction {
    type: TempuraActionTypes.FETCH_TEMPURA_ERROR;
    payload: string;
}

export type TempuraAction = FetchTempuraAction | FetchTempuraSuccessAction | FetchTempuraErrorAction;