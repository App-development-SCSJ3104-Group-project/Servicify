import axios from "axios"
import { RequestsActionType } from "./request_action_type"
export const makeRequest = (data) => {
    return (dispatch) => {

        dispatch(setLoading(true))
        const req = {
            customerId: data.customerId,
            serviceProviderId: data.serviceProviderId,
            description: data.description,
            fees: data.fees,
            location: data.location
        }

        axios.post("http://localhost:5000/requests/create", req).then(res => {
            dispatch(setLoading(false))

        })

    }
}
export const setLoading = (value) => ({
    type: RequestsActionType.SET_LOADING,
    value
})

export const setRequest = (value) => ({
    type: RequestsActionType.GET_REQUESTS,
    value
})

export const getRequest = (id) => {
    return (dispatch) => {
        console.log(id);
        dispatch(setLoading(true))

        axios.get("http://localhost:5000/requests/" + id, { isServiceProvider: false }).then(res => {

            console.log(res.data)
            dispatch(setLoading(false))
            dispatch(setRequest(res.data))
        })

    }
}