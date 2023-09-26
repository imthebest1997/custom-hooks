export const todoReducer = (initialState = [], action) => {
    switch (action.type) {
        case "[TODO] Add Todo":
            return [action.payload, ...initialState];                    

        case "[TODO] Delete Todo":
            return initialState.filter(todo => todo.id !== action.payload);

        case "[TODO] Toggle Todo":
            return initialState.map(todo => 
                (todo.id === action.payload)
                    ? {...todo, done: !todo.done}
                    : todo
            );

        default:            
            return initialState;
    }
}
