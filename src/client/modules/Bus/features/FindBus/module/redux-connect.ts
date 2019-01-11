import { createCitiesSelector } from "./reselect";
import { actionReqFetchListCity } from "../../../../PreLoader/features/ListCity/module/actions";
import { actionChangeDateLocation, actionChangeFromLocation, actionChangeToLocation, actionFindBus } from "./actions";
import { createBusSelector } from "../../../module/reselect";

export const mapStateToProps = (state:any) => {
    return {
        cities: createCitiesSelector(state),
        bus: createBusSelector(state)
    }
}

export const mapDisPatchToProps = {
   fetchListCities: actionReqFetchListCity,
   changeFromLocation: actionChangeFromLocation,
   changeToLocation: actionChangeToLocation,
   changeDateLocation: actionChangeDateLocation,
   findBus: actionFindBus
}