import * as RollsActionCreators from "./rolls"
import * as BakedRollsActionCreators from "./bakedRolls"
import * as FriedRollsActionCreators from "./friedRolls"
import * as SetsActionCreators from "./sets"
import * as SushiActionCreators from "./sushi"
import * as SaladsActionCreators from "./salads"
import * as SupyActionCreators from "./supy"
import * as NapitkiActionCreators from "./napitki"
import * as TempuraActionCreators from "./tempura"
import * as VokiActionCreators from "./voki"

export default {
    ...RollsActionCreators,
    ...BakedRollsActionCreators,
    ...FriedRollsActionCreators,
    ...SetsActionCreators,
    ...SaladsActionCreators,
    ...SushiActionCreators,
    ...SupyActionCreators,
    ...NapitkiActionCreators,
    ...TempuraActionCreators,
    ...VokiActionCreators
}