import { CategoriesActionType } from "./categories_action_type";

const initState =
{
    loading: false,
    serviceProviders: []
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
    }
    return state;
}
export default categoriesReducer