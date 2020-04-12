const initialState = {
    user: "User",
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ACTUALIZAR":
            console.log(action.payload);
            return {...state, user: state.user};
        default: 
            return state;
    }
}

export default userReducer;