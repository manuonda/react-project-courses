export const AppReducer = (state, action) =>  {
    console.log(state);
    console.log(action);
    switch (action.type) {
        case 'DELETE_USER':
            console.log('DELETE_USER', action);
            return {
                users: state.users.filter( user => user.id !== action.payload)
            };
        case 'ADD_USER':
            return {
                users: [...state.users, action.payload]
            };
        case 'EDIT_USER':
            const updateUser = action.payload;
            console.log(action.payload);
            const updateUsers = state.users.map( user => {
                if ( user.id === updateUser.id) {
                    return updateUser;
                }
                return user;
            })

            return {
                users: updateUsers
            }
        
        default: return state;
    }
}