// import { loginSelector } from "Login/module/reselect";
import { actionRequestWishBus } from "./actions";

export const mapStateToProps  = state => ({
    // login: loginSelector(state)
});


export const mapDispatchToProps = {
    wishBus: actionRequestWishBus
}