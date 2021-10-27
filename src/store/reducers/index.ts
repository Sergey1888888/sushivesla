import {combineReducers} from "redux";
import {rollsReducer} from "./rollsReducer";
import {setsReducer} from "./setsReducer";
import {saladsReducer} from "./saladsReducer";
import {sushiReducer} from "./sushiReducer";
import {friedRollsReducer} from "./friedRollsReducer";
import {bakedRollsReducer} from "./bakedRollsReducer";
import {supyReducer} from "./supyReducer";
import {napitkiReducer} from "./napitkiReducer";
import {tempuraReducer} from "./tempuraReducer";
import {vokiReducer} from "./vokiReducer";

export const rootReducer = combineReducers({
    rolls: rollsReducer,
    friedRolls: friedRollsReducer,
    bakedRolls: bakedRollsReducer,
    sets: setsReducer,
    salads: saladsReducer,
    sushi: sushiReducer,
    supy: supyReducer,
    napitki: napitkiReducer,
    tempura: tempuraReducer,
    voki: vokiReducer,
})

export type RootState = ReturnType<typeof rootReducer>;