export interface ISushi {
    id: string;
    name: string;
    description: string;
    weight?: number;
    price?: number;
    image: string;
}

export interface SushiState {
    sushi: ISushi[];
    loading: boolean;
    error: null | string;
}

export enum SushiActionTypes {
    FETCH_SUSHI = "FETCH_SUSHI",
    FETCH_SUSHI_SUCCESS = "FETCH_SUSHI_SUCCESS",
    FETCH_SUSHI_ERROR = "FETCH_SUSHI_ERROR"
}


interface FetchSushiAction {
    type: SushiActionTypes.FETCH_SUSHI;
}

interface FetchSushiSuccessAction {
    type: SushiActionTypes.FETCH_SUSHI_SUCCESS;
    payload: ISushi[];
}

interface FetchSushiErrorAction {
    type: SushiActionTypes.FETCH_SUSHI_ERROR;
    payload: string;
}

export type SushiAction = FetchSushiAction | FetchSushiSuccessAction | FetchSushiErrorAction;