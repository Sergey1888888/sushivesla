export interface IFriedRolls {
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

export interface FriedRollsState {
    friedRolls: IFriedRolls[];
    loading: boolean;
    error: null | string;
}

export enum FriedRollsActionTypes {
    FETCH_FRIED_ROLLS = "FETCH_FRIED_ROLLS",
    FETCH_FRIED_ROLLS_SUCCESS = "FETCH_FRIED_ROLLS_SUCCESS",
    FETCH_FRIED_ROLLS_ERROR = "FETCH_FRIED_ROLLS_ERROR"
}

interface FetchFriedRollsAction {
    type: FriedRollsActionTypes.FETCH_FRIED_ROLLS;
}

interface FetchFriedRollsSuccessAction {
    type: FriedRollsActionTypes.FETCH_FRIED_ROLLS_SUCCESS;
    payload: IFriedRolls[];
}

interface FetchFriedRollsErrorAction {
    type: FriedRollsActionTypes.FETCH_FRIED_ROLLS_ERROR;
    payload: string;
}

export type FriedRollsAction = FetchFriedRollsAction | FetchFriedRollsSuccessAction | FetchFriedRollsErrorAction;