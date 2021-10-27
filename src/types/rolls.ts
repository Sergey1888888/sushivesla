export interface IRolls {
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

export interface RollsState {
    rolls: IRolls[];
    loading: boolean;
    error: null | string;
}

export enum RollsActionTypes {
    FETCH_ROLLS = "FETCH_ROLLS",
    FETCH_ROLLS_SUCCESS = "FETCH_ROLLS_SUCCESS",
    FETCH_ROLLS_ERROR = "FETCH_ROLLS_ERROR"
}

interface FetchRollsAction {
    type: RollsActionTypes.FETCH_ROLLS;
}

interface FetchRollsSuccessAction {
    type: RollsActionTypes.FETCH_ROLLS_SUCCESS;
    payload: IRolls[];
}

interface FetchRollsErrorAction {
    type: RollsActionTypes.FETCH_ROLLS_ERROR;
    payload: string;
}

export type RollsAction = FetchRollsAction | FetchRollsSuccessAction | FetchRollsErrorAction;