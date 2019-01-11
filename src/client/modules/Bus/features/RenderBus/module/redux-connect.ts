import { createFindBusSelector, createSearchFormSelector } from "./reselect";
import { actionFindBus } from "Bus/features/FindBus/module/actions";


export const mapStateToProps = state => {
    return {
        searchForm: createSearchFormSelector(state),
        findBus: createFindBusSelector(state)
    }
}

export const mapDispatchToProps = {
    onLoadmoreBus: actionFindBus,
}