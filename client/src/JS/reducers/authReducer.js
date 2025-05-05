const { LOAD_AUTH, SUCCESS_AUTH, FAIL_AUTH, CURRENT_AUTH, LOGOUT_AUTH } = require("../actionTypes/authActionTypes");

const initialState = {
    isLoad: false,
    user: {},
    errors: [],
    success: [],
    isAuth: false,
};

const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_AUTH:
            return { ...state, isLoad: true };
        case SUCCESS_AUTH:
            localStorage.setItem("token", payload.token);
            return {
                ...state,
                isLoad: false,
                user: payload.user,
                success: payload.success,
                isAuth: true,
            };
        case FAIL_AUTH:
            return { ...state, isLoad: false, errors: payload };
        case CURRENT_AUTH:
            return { ...state, isLoad: false, user: payload, isAuth: true };
        case LOGOUT_AUTH:
            localStorage.removeItem("token");
            return {
                ...state,
                isLoad: false,
                user: {},
                success: [],
                errors: [],
                isAuth: false,
            };
        default:
            return state;
    }
};

module.exports = authReducer;
//export default authReducer;

