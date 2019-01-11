import { loginSelector } from "Login/module/reselect";
import { actionGetBusImages, actionGetBusPlan, actionGetBusCancellationPolicy, actionGetBusRatings } from "../features/BusItemTabs/module/actions";

export const mapStateToProps = state => ({
    login: loginSelector(state)
});


export const mapDispatchToProps = {
    onGetBusImage: actionGetBusImages,
    onGetBusPlan: actionGetBusPlan,
    onGetBusCancellationPolicy: actionGetBusCancellationPolicy,
    onGetBusRatings: actionGetBusRatings
}
