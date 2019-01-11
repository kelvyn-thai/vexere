import { brandSelector } from "Brand/module/reselect";
import { actionRequestFetchBrand } from "Brand/module/actions";
import { createBusSelector } from "Bus/module/reselect";
import {
    actionFilterByBrand,
    actionRemoveFilterByBrand,
    actionRemoveAllFilter,
    actionFilterByBusType,
    actionRemoveFilterByBusType,
    actionFilterByPrice,
    actionRemoveFilterByPrice

} from "Bus/features/FindBus/module/actions";

export const mapStateToProps = state => ({
    brand: brandSelector(state),
    searchForm: createBusSelector(state)['searchForm']
});

export const mapDispatchToProps = {
    fetchBrand: actionRequestFetchBrand,
    filerByBrand: actionFilterByBrand,
    removeFilterByBrand: actionRemoveFilterByBrand,
    filterByBusType: actionFilterByBusType,
    removeFIlterByBusType: actionRemoveFilterByBusType,
    filterByPrice: actionFilterByPrice,
    removeFIlterByPrice: actionRemoveFilterByPrice,
    removeAllFilter: actionRemoveAllFilter
}