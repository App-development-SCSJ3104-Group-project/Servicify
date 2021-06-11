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
export const checkEmailAvailability = ({ email }) => {

    return (dispatch) => {

        const url = `http://localhost:3000/users/auth?email=${email}`;

    }

}

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

        console.log(userInfo);
        axios.post("http://localhost:3000/users/login/auth", userInfo).then(res => {

            const users = res.data;

            switch (fetchingMode) {

                case "validateUser":
                    if (users.length != 0) {
                        dispatch(validatingUserSucess(users))
                    } else {
                        dispatch(validatingUserFailed())
                    }
                    break;

                default:
                    dispatch(fetchUserSucess(users))
                    break;
            }

        }).catch(err => {
            const errorMsg = err.message;

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