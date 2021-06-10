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

export const checkEmailAvailability = ({ email }) => {

    return (dispatch) => {

        const url = `http://localhost:3000/users/auth?email=${email}`;

    }

}

export const validateUser = (userInfo) => {

        console.log(userInfo)
        return (dispatch) => {

            const url = `http://localhost:3000/users/auth?email=${userInfo.email}&password=${userInfo.password}`;
            dispatch(fetchUsers(url, "validateUser"))
        }
    }
    // thunk middleware action
export const fetchUsers = (url, fetchingMode) => {

    return (dispatch) => {

        dispatch(fetchUsersRequest());
        axios({
            method: 'GET', //you can set what request you want to be
            url: url,
            data: null,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            }
        }).then(res => {
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

    }

}