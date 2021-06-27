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
