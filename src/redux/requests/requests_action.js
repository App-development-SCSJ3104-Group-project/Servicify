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
            payment: data.payment,
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
        dispatch(setLoading(true))

        axios.get("http://localhost:5000/requests/" + id, { isServiceProvider: false }).then(res => {

            dispatch(setLoading(false))
            dispatch(setRequest(res.data))
        })

    }
}
export const cancelRequest = (id, customerId) => {
    return (dispatch) => {
        dispatch(setLoading(true))

        axios.patch("http://localhost:5000/requests/" + id, { status: "Canceled" }).then(res => {

            getRequest(customerId)
            dispatch(setLoading(false))
        })

    }
}