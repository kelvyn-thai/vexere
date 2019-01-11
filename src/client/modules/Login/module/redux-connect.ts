import { loginSelector } from "./reselect";
import { actionLogin } from "./actions";

export const mapStateToProps = state =>({
    login: loginSelector(state)
})

export const mapDispatchToProps = {
    loginRequest: actionLogin
}