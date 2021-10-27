export interface INapitki {
    id: string;
    name: string;
    description: string;
    weight: string;
    price: number;
    image: string;
    color?: string;
}

export interface NapitkiState {
    napitki: INapitki[];
    loading: boolean;
    error: null | string;
}

export enum NapitkiActionTypes {
    FETCH_NAPITKI = "FETCH_NAPITKI",
    FETCH_NAPITKI_SUCCESS = "FETCH_NAPITKI_SUCCESS",
    FETCH_NAPITKI_ERROR = "FETCH_NAPITKI_ERROR"
}

interface FetchNapitkiAction {
    type: NapitkiActionTypes.FETCH_NAPITKI;
}

interface FetchNapitkiSuccessAction {
    type: NapitkiActionTypes.FETCH_NAPITKI_SUCCESS;
    payload: INapitki[];
}

interface FetchNapitkiErrorAction {
    type: NapitkiActionTypes.FETCH_NAPITKI_ERROR;
    payload: string;
}

export type NapitkiAction = FetchNapitkiAction | FetchNapitkiSuccessAction | FetchNapitkiErrorAction;