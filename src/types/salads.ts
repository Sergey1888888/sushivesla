export interface ISalads {
    id: string;
    name: string;
    description: string;
    weight: number;
    price: number;
    image: string;
}

export interface SaladsState {
    salads: ISalads[];
    loading: boolean;
    error: null | string;
}

export enum SaladsActionTypes {
    FETCH_SALADS = "FETCH_SALADS",
    FETCH_SALADS_SUCCESS = "FETCH_SALADS_SUCCESS",
    FETCH_SALADS_ERROR = "FETCH_SALADS_ERROR"
}


interface FetchSaladsAction {
    type: SaladsActionTypes.FETCH_SALADS;
}

interface FetchSaladsSuccessAction {
    type: SaladsActionTypes.FETCH_SALADS_SUCCESS;
    payload: ISalads[];
}

interface FetchSaladsErrorAction {
    type: SaladsActionTypes.FETCH_SALADS_ERROR;
    payload: string;
}

export type SaladsAction = FetchSaladsAction | FetchSaladsSuccessAction | FetchSaladsErrorAction;