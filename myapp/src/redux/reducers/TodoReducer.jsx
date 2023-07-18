const initialState= []
export const todoReducer = (state=initialState, action)=>{
    switch(action.type){
        case 'ADD_TODO':
            return [...state, action.payload];
        case 'DELETE_TODO':
            const newState= state.filter((todo)=>todo.id !== action.payload)
            return newState;
        case 'UPDATE_TODO':
           let uState=state.filter((todo)=>todo.id != action.payload.id);
           console.log(uState);
           return [...uState, action.payload];
            
        default:
            return state
    }
}
