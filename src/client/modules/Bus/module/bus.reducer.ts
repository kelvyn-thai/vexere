import searchForm  from "../features/FindBus/module/search-form-reducer";
import findBus  from "../features/FindBus/module/find-bus-reducer";
import ticket from "../features/RenderBus/features/BusItem/features/BusItemTabsBookTicket/module/ticket-reducer";
import { combineReducers } from "redux";

export default combineReducers({
    searchForm,
    findBus,
    ticket,
});
