import axios from "axios"
import { UserActionTypes } from "./users_types"

export const SubmitForm = () => ({
    type: "SUBMIT_FORM",
    payload: null,
});

export const fetchUsersRequest = () => ({


    type: UserActionTypes.FETCH_USERS_REQUEST,
    payload: null

})

export const fetchUserSucess = (users) => ({

    type: UserActionTypes.FETCH_USERS_SUCESS,
    payload: users
})


export const fetchUsersFailed = (err) => ({

    type: UserActionTypes.FETCH_USERS_FAILED,
    payload: err
})

// thunk middleware action
export const fetchUsers = () => {

    alert("fetch")

    return (dispatch) => {

        dispatch(fetchUsersRequest);
        axios.get("http://localhost:3000/users").then(res => {
            alert("sucess")
            const users = res.data;
            dispatch(fetchUserSucess(users))
        }).catch(err => {
            alert("failed")
            const errorMsg = err.message;
            dispatch(fetchUsersFailed(errorMsg))
        })

    }

}