export const setPending = () => {
    return {
        type: 'todos/pending'
    }
}

export const setFullFilled = (payload) => ({type: 'todos/fulfilled', payload});

export const setError = (error) => ({type: 'todos/error' , error: error.message})

export const setTodoComplete = (payload) => ({type: 'todo/complete', payload });

export const setFilter = (payload) =>({ type: 'filter/set' , payload }); 