const initState = {

    submitted: false

}

const usersReducer = (state = initState, action) => {

    switch (action.type) {

        case "SUBMIT_FORM":

            return {
                ...state,
                submitted: !initState.submitted
            }

    }
    return state;
}
export default usersReducer