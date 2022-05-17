let initFetching = {
    laoding:'idle'
}


export const reduceReducers=(...reducers) => (state, action) => 
  reducers.reduce((acc, el) => el(acc,action),state);

export const makeFetchingReducer = actions => (state = initFetching, action) => {
   switch(action.type) {
       case  actions[0] : {
           return {...state, loading:'pending'}
       }
       case actions[1] :{
           return {...state, loading: 'succeded'}
       };
       case actions[2]: {
           return { error: action.error, loading:'rejected'}
       };
       default:
           return state;
   }
}


// Funciones puras 
export const makeSetReducer = actions => (state = 'all', action) => {
    switch(action.type) {
        case actions[0] :
            return action.payload;
        default:
            return state;
    }
} 

