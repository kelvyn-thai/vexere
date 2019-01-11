import { actionGetBusImages, actionGetBusPlan, actionGetBusCancellationPolicy, actionGetBusRatings } from "./actions";


export const mapDispatchToProps = {
    onGetBusImage: actionGetBusImages,
    onGetBusPlan: actionGetBusPlan,
    onGetBusCancellationPolicy: actionGetBusCancellationPolicy,
    onGetBusRatings: actionGetBusRatings
}


