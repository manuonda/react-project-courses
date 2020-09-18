const usersReducer = (state = [] , action) => {
    switch (action.type) {
        case 'ADD_USER' : return [...state ,...action.payload]
    }
}

export default usersReducer;