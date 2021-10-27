export interface IBakedRolls {
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

export interface BakedRollsState {
    bakedRolls: IBakedRolls[];
    loading: boolean;
    error: null | string;
}

export enum BakedRollsActionTypes {
    FETCH_BAKED_ROLLS = "FETCH_BAKED_ROLLS",
    FETCH_BAKED_ROLLS_SUCCESS = "FETCH_BAKED_ROLLS_SUCCESS",
    FETCH_BAKED_ROLLS_ERROR = "FETCH_BAKED_ROLLS_ERROR"
}

interface FetchBakedRollsAction {
    type: BakedRollsActionTypes.FETCH_BAKED_ROLLS;
}

interface FetchBakedRollsSuccessAction {
    type: BakedRollsActionTypes.FETCH_BAKED_ROLLS_SUCCESS;
    payload: IBakedRolls[];
}

interface FetchBakedRollsErrorAction {
    type: BakedRollsActionTypes.FETCH_BAKED_ROLLS_ERROR;
    payload: string;
}

export type BakedRollsAction = FetchBakedRollsAction | FetchBakedRollsSuccessAction | FetchBakedRollsErrorAction;