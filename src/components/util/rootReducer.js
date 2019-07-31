const initialState = {
    todos: []
}

export const rootReducer = (state = initialState, { type, payload }) => {
    switch(type){
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, payload]
            }
        case 'TOGGLE_TODO':
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === payload ? !todo.completed : todo)
            }
        default:
            return state;
    }
}