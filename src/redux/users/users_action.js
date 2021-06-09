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
    users: users,
})


export const fetchUsersFailed = (err) => ({
    type: UserActionTypes.FETCH_USERS_FAILED,
    payload: err
})

export const validateUser = ({ email, password }) => {

        return (dispatch) => {
            const url = `https://jsonplaceholder.typicode.com/users?email=${email}`;
            dispatch(fetchUsers(url))
        }

    }
    // thunk middleware action
export const fetchUsers = (url) => {

    return (dispatch) => {

        dispatch(fetchUsersRequest);
        axios.get(url).then(res => {
            const users = res.data;
            console.log(users);
            dispatch(fetchUserSucess(users))
        }).catch(err => {
            const errorMsg = err.message;
            dispatch(fetchUsersFailed(errorMsg))
        })

    }

}