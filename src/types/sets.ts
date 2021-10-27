export interface ISets {
    id: string;
    name: string;
    description: string;
    weight?: number;
    count: number;
    personCount?: number;
    price?: number;
    image: string;
    color?: string;
}

export interface SetsState {
    sets: ISets[];
    loading: boolean;
    error: null | string;
}

export enum SetsActionTypes {
    FETCH_SETS = "FETCH_SETS",
    FETCH_SETS_SUCCESS = "FETCH_SETS_SUCCESS",
    FETCH_SETS_ERROR = "FETCH_SETS_ERROR"
}


interface FetchSetsAction {
    type: SetsActionTypes.FETCH_SETS;
}

interface FetchSetsSuccessAction {
    type: SetsActionTypes.FETCH_SETS_SUCCESS;
    payload: ISets[];
}

interface FetchSetsErrorAction {
    type: SetsActionTypes.FETCH_SETS_ERROR;
    payload: string;
}

export type SetsAction = FetchSetsAction | FetchSetsSuccessAction | FetchSetsErrorAction;