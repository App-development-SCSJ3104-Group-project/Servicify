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

        dispatch(setLoading(true))
        axios.get("http://localhost:5000/users/categories").then(res => {

            const data = res.data

            dispatch(loadCategories(data))

            dispatch(setLoading(false))

        })
    }
}
export const setLoading = (value) => ({
    type: CategoriesActionType.SET_LOADING,
    value
})
export const setUserProfile = (id, type) => ({
    type: CategoriesActionType.SET_USER_PROFILE,
    id,
    value: type
})

export const getUser = (id, type) => {

    return (dispatch) => {

        dispatch(setLoading(true))

        dispatch(setUserProfile(id, type))

        dispatch(setLoading(false))

    }

}