const initial_state = {
    carts : []
}

export const Cartreducer = (state = initial_state,action)=>{
    switch(action.type){
        case "ADD To CART":
            return{
                ...state,
                carts:[...state.carts,action.payload]
            }
            default:
                return state
    }
}