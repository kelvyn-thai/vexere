import { createBusSelector } from "./reselect";
import { actionSubmitForm } from "./actions";

export const mapStateToProps = state => {
    return {
        bus: createBusSelector(state)
    }
}

export const mapDispatchToProps = {
    actionSubmitForm
}