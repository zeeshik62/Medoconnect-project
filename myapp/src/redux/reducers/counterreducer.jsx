
export const counterReducer = (state=0, action)=>{
    switch(action.type){
        case 'DEPOSIT':
            return state+ action.payload;
        case 'WITHDRAW':
            return state-action.payload;
        default:
            return state;
    }
}
