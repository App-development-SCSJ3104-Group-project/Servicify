import axios from "axios"
import { CategoriesActionType } from "./categories_action_type"
export const loadCategories = (data) => {
    return {
        type: CategoriesActionType.LOAD_CATEGORIES,
        data
    }
}
export const fetchServiceProviders = () => {
    return (dispatch) => {

        axios.get("http://localhost:5000/users/categories").then(res => {

            const data = res.data

            return dispatch(loadCategories(data))

        })
    }
}
export const setLoading = (value) => ({
    type: CategoriesActionType.SET_LOADING,
    value
})
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
        console.log(data);
        axios.post("http://localhost:5000/requests/create", req).then(res => {
            dispatch(setLoading(false))

        })

    }
}