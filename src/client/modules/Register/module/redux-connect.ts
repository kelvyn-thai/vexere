import { registerSelector } from "./reselect";
import { actionRegister } from "./actions";

export const mapStateToProps = state =>({
    register: registerSelector(state)
})

export const mapDispatchToProps = {
    registerRequest: actionRegister
}