export interface IVoki {
    id: string;
    name: string;
    description: string;
    weight: number;
    price: number;
    image: string;
    color?: string;
}

export interface VokiState {
    voki: IVoki[];
    loading: boolean;
    error: null | string;
}

export enum VokiActionTypes {
    FETCH_VOKI = "FETCH_VOKI",
    FETCH_VOKI_SUCCESS = "FETCH_VOKI_SUCCESS",
    FETCH_VOKI_ERROR = "FETCH_VOKI_ERROR"
}

interface FetchVokiAction {
    type: VokiActionTypes.FETCH_VOKI;
}

interface FetchVokiSuccessAction {
    type: VokiActionTypes.FETCH_VOKI_SUCCESS;
    payload: IVoki[];
}

interface FetchVokiErrorAction {
    type: VokiActionTypes.FETCH_VOKI_ERROR;
    payload: string;
}

export type VokiAction = FetchVokiAction | FetchVokiSuccessAction | FetchVokiErrorAction;