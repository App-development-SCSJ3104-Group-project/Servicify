import { CategoriesActionType } from "./categories_action_type";

const initState =
{
    loading: false,
    serviceProviders: [],
    user: "",
}

const categoriesReducer = (state = initState, action) => {

    switch (action.type) {

        case CategoriesActionType.LOAD_CATEGORIES:
            {
                let categories = new Map
                action.data.forEach(e => categories.has(e.jobName) ? categories.get(e.jobName).push(e) : categories.set(e.jobName, []))

                return {
                    ...state,
                    serviceProviders: categories
                }
            }
        case CategoriesActionType.SET_LOADING:
            {
                return {
                    ...state,
                    loading: action.value
                }
            }
        case CategoriesActionType.SET_USER_PROFILE:
            {

                const user = state.serviceProviders.get(action.value).filter((e) => e._id ==== action.id)

                return {
                    ...state,
                    user: user[0]
                }
            }
    }
    return state;
}
export default categoriesReducer