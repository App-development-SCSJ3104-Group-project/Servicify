import axios from "axios"
import { UserActionTypes } from "./users_types"


export const fetchUsersRequest = () => ({
    type: UserActionTypes.FETCH_USERS_REQUEST,
    payload: null

})

export const fetchUserSucess = (users) => ({
    type: UserActionTypes.FETCH_USERS_SUCESS,
    users: users,
})


export const fetchUsersFailed = (err) => ({
    type: UserActionTypes.FETCH_USERS_FAILED,
    payload: err
})
export const validatingUserFailed = () => ({
    type: UserActionTypes.VALID_USER_FAILED
})
export const validatingUserSucess = (user) => ({

    type: UserActionTypes.VALID_USER_SUCESS,
    user
})

export const emailAvailabilitySucess = () => ({
    type: UserActionTypes.EMAIL_Availability_SUCESS,
})
export const emailAvailabilityFailure = () => ({
    type: UserActionTypes.EMAIL_Availability_FAILURE,
})
export const checkEmailAvailability = (userInfo) => {

    return (dispatch) => {

        const url = `https://service-backend-web.herokuapp.com/users/signup/auth`;
        dispatch(fetchUsers(url, "checkDuplication", userInfo))
    }


}

export const userLogout = () => ({

    type: UserActionTypes.USER_LOGUT

})
export const resetLoginState = () => ({

    type: UserActionTypes.RESET_LOGIN_STATE
})
export const resetSignupState = () => ({

    type: UserActionTypes.RESET_SIGNUP_STATE

})
export const validateUser = (userInfo) => {

        // console.log(userInfo)
        return (dispatch) => {
            const url = `https://service-backend-web.herokuapp.com/users/login/auth`;
            dispatch(fetchUsers(url, "validateUser", userInfo))
        }
    }
    // thunk middleware action
export const fetchUsers = (url, fetchingMode, userInfo) => {

    return (dispatch) => {

        dispatch(fetchUsersRequest());

        console.log(userInfo.email)
        axios.post(url, userInfo).then(res => {

                const data = res.data;

                console.log(data)
                console.log(data.length)

                switch (fetchingMode) {

                    case "validateUser":
                        if (data.length != 0) {
                            dispatch(validatingUserSucess(data))
                        } else {
                            dispatch(validatingUserFailed())
                        }
                        break;
                    case "checkDuplication":
                        if (data.length == 0) {
                            dispatch(emailAvailabilityFailure())

                        } else {
                            dispatch(emailAvailabilitySucess())
                        }
                        break;
                    default:
                        dispatch(fetchUserSucess(data))
                        break;
                }

            }).catch(err => {
                const errorMsg = err.message;

                alert(errorMsg)
                switch (fetchingMode) {

                    case "validateUser":
                        dispatch(validatingUserFailed())
                        break;

                    default:
                        dispatch(fetchUsersFailed(errorMsg))
                        break;
                }
            })
            // 
    }
}